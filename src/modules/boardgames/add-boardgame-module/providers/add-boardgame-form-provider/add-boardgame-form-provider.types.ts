import { SubmitHandler, UseFormReturn } from "react-hook-form";

import { AddBoardgame } from "../../schema";

type Designer = {
  loading: boolean;
  list: string[];
};

type GameData = {
  fetch: () => void;
  loading: boolean;
};

type AdditionalGameData = {
  fetch: () => void;
  loading: boolean;
};

export type AddBoardgameFormContextValue = {
  publishers: string[];
  gameNameObject: { id: string; value: string };
  updateGameNameObject: (value: { id: string; value: string }) => void;
  designers: Designer;
  gameData: GameData;
  aditionalGameData: AdditionalGameData;
  onSubmit: SubmitHandler<AddBoardgame>;
} & UseFormReturn<AddBoardgame>;
