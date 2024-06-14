import { useQuery } from "@tanstack/react-query";

import { fetchBoardgames } from "../../repository";

export const useFetchBoardgames = () => {
  return useQuery({
    queryKey: ["boardgames"],
    queryFn: async () => {
      const apiResponse = await fetchBoardgames();
      return apiResponse;
    },
  });
};
