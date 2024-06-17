import { Boardgame } from "@/interfaces";

type Modal = {
  open: (boardgameId: number) => void;
  close: () => void;
};

export type BoardgameDetailsContextValue = {
  modal: Modal;
  isLoading: boolean;
  boardgame: Boardgame | undefined;
};
