import { useMutation, useQueryClient } from "@tanstack/react-query";

import { registerGame } from "../../repository/register-game";
import { AddBoardgame } from "../../schema";

export const useRegisterGame = (setModalOpen: (open: boolean) => void, setError: any, errorHandler?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<AddBoardgame, Error, AddBoardgame>({
    mutationFn: registerGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boardgames"] });
      setModalOpen(true);
    },
    onError: (error: Error) => {
      const errorData = JSON.parse(error.message);
      if (!!errorHandler) {
        errorHandler();
      }
      setError("name", {
        type: "manual",
        message: errorData.message,
      });
    },
  });
};
