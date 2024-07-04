import { Boardgame } from "@/interfaces";
import { BaseFields } from "@/utils/types";

export type Mechanic = BaseFields & {
  boardgames: Array<Boardgame>;
};

export type Mechanics = Array<Mechanic>;
