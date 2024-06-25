import { useForm } from "react-hook-form";

import { useGenericMutation } from "@/hooks";
import { useSleeveBrands } from "@/modules/sleeve-brands";
import { useSleeveCategories } from "@/modules/sleeve-categories";
import { useSleeveSizes } from "@/modules/sleeve-sizes";
import { yupResolver } from "@hookform/resolvers/yup";

import { SleeveProductSchema } from "../../dto";
import { registerSleeveProduct } from "../../repository";
import { SleeveProduct } from "../../types";

export const useSleeveProductForm = () => {
  const { data: categories } = useSleeveCategories();
  const { data: brands } = useSleeveBrands();
  const { isLoading: isLoadingSleeveSizes, getFormattedArray, findByName } = useSleeveSizes();

  const { control, handleSubmit, setError, reset } = useForm<SleeveProduct>({
    resolver: yupResolver(SleeveProductSchema),
    defaultValues: {
      brand: "",
      size: "",
      category: "REGULAR",
      sleevesPerPack: 0,
    },
  });

  const mutation = useGenericMutation(registerSleeveProduct, setError, {
    queryKey: ["sleeve"],
  });

  const onSubmit = async (data: SleeveProduct) => {
    try {
      const formattedFormData = {
        ...data,
        sizeId: findByName(data.size)?.id || data.size,
      };
      await mutation.mutateAsync(formattedFormData);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    brands: brands?.map((item) => item.name) || [],
    sizes: {
      loading: isLoadingSleeveSizes,
      values: getFormattedArray(),
    },
    categories,
  };
};
