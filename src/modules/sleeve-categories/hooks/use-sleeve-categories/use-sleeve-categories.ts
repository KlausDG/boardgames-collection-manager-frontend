import { useQuery } from "@tanstack/react-query";

import { fetchSleeveCategories } from "../../repository";

export const useSleeveCategories = (enable: boolean = true) => {
  return useQuery({
    queryKey: ["sleeveCategories"],
    queryFn: fetchSleeveCategories,
    enabled: enable,
  });
};
