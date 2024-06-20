import { useForm } from "react-hook-form";

import { useGenericMutation } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

import { SleeveTypeSchema } from "../../dto";
import { registerSleeveType } from "../../repository";
import { SleeveType } from "../../types";

export const useSleeveTypeForm = () => {
  const { control, handleSubmit, setError } = useForm<SleeveType>({
    resolver: yupResolver(SleeveTypeSchema),
    defaultValues: {
      type: "",
      width: undefined,
      height: undefined,
    },
  });

  const mutation = useGenericMutation(registerSleeveType, setError, { queryKey: ["sleeve-types"] });

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
