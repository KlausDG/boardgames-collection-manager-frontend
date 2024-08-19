import { Boardgame } from "@/interfaces";

export type BoardgameFilter = {
  key: keyof Boardgame;
  value: string | boolean;
  isLinked: boolean;
};
