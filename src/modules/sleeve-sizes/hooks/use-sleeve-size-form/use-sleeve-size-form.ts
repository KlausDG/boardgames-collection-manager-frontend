import { useForm } from "react-hook-form";

import { useGenericMutation } from "@/hooks";
import { yupResolver } from "@hookform/resolvers/yup";

import { SleeveSizeSchema } from "../../dto";
import { registerSleeveSize } from "../../repository";
import { SleeveSizeFormData } from "../../types";

export const useSleeveSizeForm = () => {
  const { control, handleSubmit, setError, reset } = useForm<SleeveSizeFormData>({
    resolver: yupResolver(SleeveSizeSchema),
    defaultValues: {
      name: "",
      width: undefined,
      height: undefined,
    },
  });

  const mutation = useGenericMutation(registerSleeveSize, setError, { queryKey: ["sleeve", "sleeve-sizes"] });

  const onSubmit = async (data: SleeveSizeFormData) => {
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
