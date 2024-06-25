import { useQuery } from "@tanstack/react-query";

import { fetchSleeveSizes } from "../../repository";

export const useSleeveSizes = () => {
  const { data, ...props } = useQuery({
    queryKey: ["sleeve", "sleeve-sizes"],
    queryFn: fetchSleeveSizes,
  });

  const getFormattedArray = () => {
    return data?.map((item) => `${item.name} (${item.width} x ${item.height})`) || [];
  };

  const findByName = (name: string) => {
    const strippedName = name.split("(")[0].trim();

    return data?.find((item) => item.name === strippedName);
  };

  return {
    getFormattedArray,
    findByName,
    data,
    ...props,
  };
};
