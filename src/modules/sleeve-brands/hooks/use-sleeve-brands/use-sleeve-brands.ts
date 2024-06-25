import { useQuery } from "@tanstack/react-query";

import { fetchSleeveBrands } from "../../repository";

export const useSleeveBrands = (enable: boolean = true) => {
  return useQuery({
    queryKey: ["sleeve", "sleeve-brands"],
    queryFn: fetchSleeveBrands,
    enabled: enable,
  });
};
