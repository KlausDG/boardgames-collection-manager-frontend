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
  bggRank: number | null;
  bggLink: string;
  bggId: number;
  inCollection: boolean;
  purchasedPrice: number | null;
  designers: Array<BaseFields>;
  mechanics: Array<BaseFields>;
  publisher: BaseFields;
  isExpansion: boolean;
  expansions?: Array<Boardgame>;
  languageDependence: string;
};
