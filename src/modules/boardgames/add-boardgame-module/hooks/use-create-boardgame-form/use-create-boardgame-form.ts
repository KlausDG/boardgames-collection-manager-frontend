import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { fetchGameById, scrapeAditionalData } from "../../repository";
import { fetchDesigners } from "../../repository/fetch-designers";
import { registerGame } from "../../repository/register-game";
import { AddBoardgame, AddBoardgameSchema } from "../../schema";

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
};

export const useCreateBoardgameForm = () => {
  const [publishers, setPublishers] = useState([]);
  const [gameNameObject, setGameNameObject] = useState({ id: "", value: "" });

  const updateGameNameObject = (value: typeof gameNameObject) => {
    setGameNameObject(value);
  };

  const { setValue, ...formProps } = useForm<AddBoardgame>({
    resolver: yupResolver(AddBoardgameSchema),
    defaultValues,
  });

  const { data: designers = [], isLoading: isFetchingDesigners } = useQuery({
    queryKey: ["designers"],
    queryFn: async () => {
      const apiResponse = await fetchDesigners();

      return apiResponse.map((designer) => designer.name);
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation<AddBoardgame, Error, AddBoardgame>({
    mutationFn: registerGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boardgames"] });
    },
  });

  const onSubmit: SubmitHandler<AddBoardgame> = async (data) => {
    try {
      await mutation.mutateAsync(data);
      console.log("Boardgame added successfully");
      //Ao adicionar o boardgame na lista, exibir um modal perguntando se gostaria de adicionar outro
    } catch (error) {
      console.error(error);
    }
  };

  const { refetch: fetchGameData, isLoading: isFetchingGameData } = useQuery({
    queryKey: ["gameData"],
    queryFn: async () => {
      const gameData = await fetchGameById(gameNameObject.id);
      if (gameData) {
        setValue("thumbnail", gameData.thumbnail);
        setValue("description", gameData.description);
        setValue("yearPublished", gameData.yearPublished);
        setValue("minPlayers", gameData.minPlayers);
        setValue("maxPlayers", gameData.maxPlayers);
        setValue("minPlaytime", gameData.minPlaytime);
        setValue("maxPlaytime", gameData.maxPlaytime);
        setValue("designers", gameData.designers);
        setValue("publisher", gameData.publishers[0]);
        setPublishers(gameData.publishers);
      }

      return gameData;
    },
    enabled: false,
  });

  const { refetch: fetchAditionalGameData, isLoading: isFetchingAditionalGameData } = useQuery({
    queryKey: ["aditionalGameData"],
    queryFn: async () => {
      const gameData = await scrapeAditionalData(gameNameObject.id);
      if (gameData) {
        setValue("bestPlayerCount", gameData.bestPlayersCount.join(", "));
        setValue("bggRank", gameData.rank);
        setValue("weight", gameData.weight);
        setValue("bggLink", gameData.link);
      }

      return gameData;
    },
    enabled: false,
  });

  return {
    publishers,
    gameNameObject,
    updateGameNameObject,
    designers: {
      loading: isFetchingDesigners,
      list: designers,
    },
    gameData: {
      fetch: fetchGameData,
      loading: isFetchingGameData,
    },
    aditionalGameData: {
      fetch: fetchAditionalGameData,
      loading: isFetchingAditionalGameData,
    },
    onSubmit,
    setValue,
    ...formProps,
  };
};
