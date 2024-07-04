import { useQuery } from "@tanstack/react-query";

import { fetchMechanics } from "../../repository";

export const useMechanics = () => {
  return useQuery({
    queryKey: ["mechanics"],
    queryFn: async () => await fetchMechanics(),
  });
};
