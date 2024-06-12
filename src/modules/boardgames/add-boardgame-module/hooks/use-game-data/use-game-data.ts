import { useQuery } from "@tanstack/react-query";

import { fetchGameById } from "../../repository";

export const useGameData = (gameId: string) => {
  return useQuery({
    queryKey: ["gameData"],
    queryFn: async () => await fetchGameById(gameId),
    retry: false,
    enabled: false,
  });
};
