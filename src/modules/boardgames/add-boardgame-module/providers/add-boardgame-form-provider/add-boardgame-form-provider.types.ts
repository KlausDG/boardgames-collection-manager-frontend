import { UseFormReturn } from "react-hook-form";

import { AddBoardgame } from "../../schema";

type Designer = {
  loading: boolean;
  list: string[];
};

type Form = {
  searchBggId: () => void;
  handleSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
  success: boolean;
  error: any;
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
