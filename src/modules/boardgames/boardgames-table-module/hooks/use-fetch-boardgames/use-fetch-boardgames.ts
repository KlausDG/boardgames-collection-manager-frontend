import { useQuery } from "@tanstack/react-query";

import { fetchBoardgames } from "../../repository";
import { BoardgameFilter } from "../../types";

export const useFetchBoardgames = (filter?: BoardgameFilter) => {
  return useQuery({
    queryKey: ["boardgames", filter],
    queryFn: async () => {
      const apiResponse = await fetchBoardgames(filter);
      return apiResponse;
    },
  });
};
