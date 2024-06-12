import { useQuery } from "@tanstack/react-query";

import { scrapeAditionalData } from "../../repository";

export const useAdditionalGameData = (gameId: string) => {
  return useQuery({
    queryKey: ["additionalGameData"],
    queryFn: () => scrapeAditionalData(gameId),
    enabled: false,
  });
};
