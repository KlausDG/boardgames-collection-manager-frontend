import { useQuery } from "@tanstack/react-query";

import { fetchSleeveProducts } from "../../repository";

export const useSleeveProducts = () => {
  const { data, ...props } = useQuery({
    queryKey: ["sleeve", "sleeve-products"],
    queryFn: fetchSleeveProducts,
  });

  return {
    data,
    ...props,
  };
};
