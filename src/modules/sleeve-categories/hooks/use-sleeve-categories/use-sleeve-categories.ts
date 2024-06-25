import { useQuery } from "@tanstack/react-query";

import { fetchSleeveCategories } from "../../repository";

export const useSleeveCategories = (enable: boolean = true) => {
  return useQuery({
    queryKey: ["sleeve", "sleeve-categories"],
    queryFn: fetchSleeveCategories,
    enabled: enable,
  });
};
