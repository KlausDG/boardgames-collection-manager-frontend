import dayjs from "dayjs";

import { Boardgame } from "@/interfaces";
import { GridRenderCellParams } from "@mui/x-data-grid";

type FormattedBoardgame = {
  id: number;
  bggRank: number | null;
  name: string;
  language: string;
  players: string;
  bestPlayerCount: string;
  playtime: string;
  weight: number;
  acquisitionDate: Date;
};

const columns = [
  { field: "bggRank", headerName: "BGG Rank", width: 100 },
  { field: "name", headerName: "Name", width: 230 },
  { field: "language", headerName: "Language", width: 100 },
  { field: "players", headerName: "Players", width: 100 },
  { field: "bestPlayerCount", headerName: "Best", width: 80 },
  { field: "playtime", headerName: "Playtime" },
  { field: "weight", headerName: "Weight" },
  {
    field: "acquisitionDate",
    headerName: "Adquirido em",
    width: 140,
    renderCell: (params: GridRenderCellParams<FormattedBoardgame>) => {
      const date = params.row.acquisitionDate;
      return date ? dayjs(date).format("DD/MM/YYYY") : "";
    },
  },
];

const boardgamesTableDto = (boardgames: Array<Boardgame> | undefined): Array<FormattedBoardgame> => {
  if (!boardgames) return [];
  return boardgames?.map((boardgame) => formatBoardgame(boardgame));
};

const formatBoardgame = (data: Boardgame): FormattedBoardgame => {
  return {
    id: data.id,
    bggRank: data.bggRank,
    name: data.name,
    language: data.language,
    players: `${data.minPlayers} - ${data.maxPlayers}`,
    bestPlayerCount: data.bestPlayerCount?.join(", "),
    playtime: `${data.minPlaytime} - ${data.maxPlaytime} min`,
    weight: data.weight,
    acquisitionDate: data.acquisitionDate,
  };
};

export { boardgamesTableDto, columns };
