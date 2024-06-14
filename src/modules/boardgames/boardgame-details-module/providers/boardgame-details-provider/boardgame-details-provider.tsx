import { createContext, useContext, useState } from "react";

import { WithChildren } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

import { fetchBoardgameDetails } from "../../repository";
import { BoardgameDetailsSetion } from "../../sections";
import { BoardgameDetailsContextValue } from "./boardgame-details-provider.types";

const BoardgameDetailsContext = createContext<BoardgameDetailsContextValue | undefined>(undefined);

export const BoardgameDetailsProvider = ({ children }: WithChildren) => {
  const [boardgameId, setBoardgameId] = useState<number | null>(null);

  const { data: boardgame, isLoading } = useQuery({
    queryKey: ["boardgame-details", boardgameId],
    queryFn: async () => {
      if (boardgameId) {
        const apiResponse = await fetchBoardgameDetails(boardgameId);
        return apiResponse;
      }
    },
    enabled: !!boardgameId,
  });

  const openModal = (boardgameId: number) => {
    setBoardgameId(boardgameId);
  };

  const closeModal = () => {
    setBoardgameId(null);
  };

  const value = {
    modal: {
      open: openModal,
      close: closeModal,
    },
    isLoading,
    boardgame,
  };

  return (
    <BoardgameDetailsContext.Provider value={value}>
      {children}
      <BoardgameDetailsSetion open={!!boardgameId} boardgame={boardgame} handleClose={closeModal} />
    </BoardgameDetailsContext.Provider>
  );
};

export const useBoardgameDetails = () => {
  const context = useContext(BoardgameDetailsContext);

  if (context === undefined) {
    throw new Error("useBoardgameDetails must be used within a BoardgameDetailsProvider");
  }

  return context;
};
