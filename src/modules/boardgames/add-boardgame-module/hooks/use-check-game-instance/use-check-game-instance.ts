import { useQuery } from "@tanstack/react-query";

import { checkGameInstance } from "../../repository";

export const useCheckGameInstance = (gameId: string) => {
  return useQuery({
    queryKey: ["checkGameInstance", gameId],
    queryFn: async () => {
      const response = await checkGameInstance(gameId);

      return response.inDatabase;
    },
    retry: false,
    enabled: !!gameId,
  });
};
