import { BaseFields } from "@/utils/types";

export type Boardgame = {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  yearPublished: number;
  language: string;
  minPlayers: number;
  maxPlayers: number;
  bestPlayerCount: Array<number>;
  minPlaytime: number;
  maxPlaytime: number;
  weight: number;
  bggRank: number;
  bggLink: string;
  bggId: number;
  inCollection: boolean;
  category: string;
  purchasedValue: number;
  designers: Array<BaseFields>;
  publisher: BaseFields;
};
