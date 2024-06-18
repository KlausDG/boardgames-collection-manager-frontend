import { SubmitHandler, UseFormReturn } from "react-hook-form";

import { AddBoardgame } from "../../schema";

type Designer = {
  loading: boolean;
  list: string[];
};

type Form = {
  submit: SubmitHandler<AddBoardgame>;
  success: boolean;
  error: Error | null;
  reset: () => void;
  loading: boolean;
};

type Expansion = {
  is: boolean;
  for: Array<{ id: number; value: string }>;
};

export type AddBoardgameFormContextValue = {
  publishers: string[];
  gameNameObject: { id: string; value: string };
  updateGameNameObject: (value: { id: string; value: string }) => void;
  designers: Designer;
  form: Form;
  expansion: Expansion;
} & UseFormReturn<AddBoardgame>;
