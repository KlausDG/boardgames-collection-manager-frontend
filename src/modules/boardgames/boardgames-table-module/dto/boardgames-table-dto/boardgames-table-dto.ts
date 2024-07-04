import { Boardgame } from "@/interfaces";

const columns = [
  { field: "bggRank", headerName: "BGG Rank", width: 100 },
  { field: "name", headerName: "Name", width: 230 },
  { field: "language", headerName: "Language", width: 100 },
  { field: "players", headerName: "Players", width: 100 },
  { field: "bestPlayerCount", headerName: "Best", width: 80 },
  { field: "playtime", headerName: "Playtime" },
  { field: "weight", headerName: "Weight" },
];

const boardgamesTableDto = (boardgames: Array<Boardgame> | undefined) => {
  if (!boardgames) return [];
  return boardgames?.map((boardgame) => formatBoardgame(boardgame));
};

const formatBoardgame = (data: Boardgame) => {
  return {
    id: data.id,
    bggRank: data.bggRank,
    name: data.name,
    language: data.language,
    players: `${data.minPlayers} - ${data.maxPlayers}`,
    bestPlayerCount: data.bestPlayerCount?.join(", "),
    playtime: `${data.minPlaytime} - ${data.maxPlaytime} min`,
    weight: data.weight,
  };
};

export { boardgamesTableDto, columns };
