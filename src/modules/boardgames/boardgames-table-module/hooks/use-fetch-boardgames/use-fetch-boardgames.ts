import { useQuery } from "@tanstack/react-query";

import { fetchBoardgames } from "../../repository";
import { BoardgameFilter } from "../../types";

type UseFetchBoardgamesProps = {
  filters?: Array<BoardgameFilter>;
  //Add OrderBy
};

export const useFetchBoardgames = ({ filters }: UseFetchBoardgamesProps) => {
  const filterKeys = filters?.map(({ key }) => key) || [];

  return useQuery({
    queryKey: ["boardgames", ...filterKeys],
    queryFn: async () => {
      const apiResponse = await fetchBoardgames(filters);
      return apiResponse;
    },
  });
};
