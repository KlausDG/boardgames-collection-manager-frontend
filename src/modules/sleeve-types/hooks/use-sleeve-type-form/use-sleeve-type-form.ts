import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { SleeveTypeSchema } from "../../dto";
import { registerSleeveType } from "../../repository";
import { SleeveType } from "../../types";

export const useSleeveTypeForm = () => {
  const queryClient = useQueryClient();

  const { control, handleSubmit, setError } = useForm<SleeveType>({
    resolver: yupResolver(SleeveTypeSchema),
    defaultValues: {
      type: "",
      width: undefined,
      height: undefined,
    },
  });

  const mutation = useMutation<SleeveType, Error, SleeveType>({
    mutationFn: registerSleeveType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sleeve-types"] });
    },
    onError: (error: Error) => {
      const errorData = JSON.parse(error.message);
      toast.error(errorData.message);
      setError("type", {
        type: "manual",
        message: errorData.message,
      });
    },
  });

  const onSubmit = async (data: SleeveType) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
};
