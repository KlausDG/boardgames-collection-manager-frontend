import { useQuery } from "@tanstack/react-query";

import { fetchSleeveBrands } from "../../repository";

export const useSleeveBrands = (enable: boolean = true) => {
  return useQuery({
    queryKey: ["sleeveBrands"],
    queryFn: fetchSleeveBrands,
    enabled: enable,
  });
};
