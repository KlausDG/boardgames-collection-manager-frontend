import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS

import React, { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

import { WithChildren } from "@/utils/types";
import { yupResolver } from "@hookform/resolvers/yup";

import { ConfirmationModal } from "../../components";
import { useAdditionalGameData, useCheckGameInstance, useDesigners, useGameData, useRegisterGame } from "../../hooks";
import { AddBoardgame, AddBoardgameSchema, DefaultProperties } from "../../schema";
import { AddBoardgameFormContextValue } from "./add-boardgame-form-provider.types";

const AddBoardgameFormContext = createContext<AddBoardgameFormContextValue | undefined>(undefined);

const defaultValues = {
  name: "",
  thumbnail: "",
  description: "",
  yearPublished: undefined,
  language: "English",
  minPlayers: undefined,
  maxPlayers: undefined,
  minPlaytime: undefined,
  maxPlaytime: undefined,
  purchasedValue: undefined,
  designers: [],
  publisher: "",
  inCollection: true,
  category: "Boardgame",
  bestPlayerCount: "",
  bggRank: undefined,
  weight: undefined,
  bggLink: "",
  bggId: undefined,
  isExpansionFor: {} as DefaultProperties,
};

export const AddBoardgameFormProvider = ({ children }: WithChildren) => {
  const [publishers, setPublishers] = useState<Array<string>>([]);
  const [gameNameObject, setGameNameObject] = useState({ id: "", value: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [espansions, setExpansion] = useState<Array<{ id: number; value: string }>>([]);

  const router = useRouter();

  const { setValue, ...formProps } = useForm<AddBoardgame>({
    resolver: yupResolver(AddBoardgameSchema),
    defaultValues,
  });

  const { data: designers = [], isLoading: isFetchingDesigners } = useDesigners();
  const { data: alreadyInDatabase, isLoading: isCheckingGameInstance } = useCheckGameInstance(gameNameObject.id);
  const { data: gameData, refetch: fetchGameData, isLoading: isFetchingGameData } = useGameData(gameNameObject.id);
  const {
    data: aditionalGameData,
    refetch: fetchAditionalGameData,
    isLoading: isFetchingAditionalGameData,
  } = useAdditionalGameData(gameNameObject.id);

  const mutation = useRegisterGame(setModalOpen, formProps.setError);

  const onSubmit: SubmitHandler<AddBoardgame> = async (data) => {
    try {
      const dataToSubmit = {
        ...data,
        isExpansionForBggId: data.isExpansionFor.id,
      };
      await mutation.mutateAsync(dataToSubmit);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (gameData) {
      const currentValues = formProps.getValues();

      formProps.reset({
        ...currentValues,
        thumbnail: gameData.thumbnail,
        description: gameData.description,
        yearPublished: gameData.yearPublished,
        minPlayers: gameData.minPlayers,
        maxPlayers: gameData.maxPlayers,
        minPlaytime: gameData.minPlaytime,
        maxPlaytime: gameData.maxPlaytime,
        designers: gameData.designers,
        publisher: gameData.publishers[0],
        isExpansion: gameData.isExpansion,
        bggId: Number(gameNameObject.id),
        isExpansionFor: gameData.isExpansion ? gameData.isExpansionFor[0] : ({} as DefaultProperties),
      });

      setPublishers(gameData.publishers);
      setExpansion(gameData.isExpansionFor);
    }
  }, [gameData]);

  useEffect(() => {
    if (aditionalGameData) {
      setValue("bestPlayerCount", aditionalGameData.bestPlayersCount.join(", "));
      setValue("bggRank", aditionalGameData.rank);
      setValue("weight", aditionalGameData.weight);
      setValue("bggLink", aditionalGameData.link);
    }
  }, [aditionalGameData]);

  useEffect(() => {
    if (!!gameNameObject.value && alreadyInDatabase === false) {
      fetchGameData();
      fetchAditionalGameData();
    }
  }, [alreadyInDatabase, gameNameObject.value]);

  useEffect(() => {
    if (alreadyInDatabase) {
      const errorMessage = "Game already in the collection";
      toast.error(errorMessage);

      formProps.setError("name", {
        type: "manual",
        message: errorMessage,
      });
    }
  }, [alreadyInDatabase]);

  const updateGameNameObject = (gameName: typeof gameNameObject) => {
    formProps.reset({ ...defaultValues, name: gameName.value });
    setGameNameObject(gameName);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const closeModal = () => {
    setModalOpen(false);
    router.push("/boardgames");
  };

  const handleConfirm = () => {
    reloadPage();
  };

  const value = {
    publishers,
    gameNameObject,
    updateGameNameObject,
    designers: {
      loading: isFetchingDesigners,
      list: designers,
    },
    form: {
      submit: onSubmit,
      success: mutation.isSuccess,
      error: mutation.error,
      reset: mutation.reset,
      loading: isCheckingGameInstance || isFetchingGameData || isFetchingAditionalGameData,
    },
    expansion: {
      is: !!gameData?.isExpansion,
      for: espansions,
    },
    setValue,
    ...formProps,
  };

  return (
    <AddBoardgameFormContext.Provider value={value}>
      {children}
      <ToastContainer theme="dark" />
      {mutation.isSuccess && (
        <ConfirmationModal open={modalOpen} handleConfirm={handleConfirm} handleClose={closeModal} />
      )}
    </AddBoardgameFormContext.Provider>
  );
};

export const useAddBoardgameForm = () => {
  const context = useContext(AddBoardgameFormContext);

  if (context === undefined) {
    throw new Error("useAddBoardgameForm must be used within a AddBoardgameFormProvider");
  }

  return context;
};
