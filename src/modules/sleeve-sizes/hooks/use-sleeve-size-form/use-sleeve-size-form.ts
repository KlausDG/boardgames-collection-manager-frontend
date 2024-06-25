import { useForm } from "react-hook-form";

import { useGenericMutation } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

import { SleeveSizeSchema } from "../../dto";
import { registerSleeveSize } from "../../repository";
import { SleeveSize } from "../../types";

export const useSleeveSizeForm = () => {
  const { control, handleSubmit, setError, reset } = useForm<SleeveSize>({
    resolver: yupResolver(SleeveSizeSchema),
    defaultValues: {
      name: "",
      width: undefined,
      height: undefined,
    },
  });

  const mutation = useGenericMutation(registerSleeveSize, setError, { queryKey: ["sleeve", "sleeve-sizes"] });

  const onSubmit = async (data: SleeveSize) => {
    try {
      await mutation.mutateAsync(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
};
