import React from "react";

import { CardContainer } from "@/components";
import { Boardgame } from "@/interfaces";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

import { fetchBoardgames } from "../../repository";

export const BoardgamesTableSection = () => {
  const { data: boardgames, isLoading } = useQuery({
    queryKey: ["boardgames"],
    queryFn: async () => {
      const apiResponse = await fetchBoardgames();
      return apiResponse;
    },
  });

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

  return (
    <Box sx={{ height: 275, width: "100%" }}>
      <CardContainer elevation={1} sx={{ padding: "24px" }}>
        {boardgames && (
          <DataGrid
            columns={columns}
            rows={boardgamesTableDto(boardgames)}
            density="compact"
            disableColumnResize
            loading={isLoading}
            onRowClick={({ row }) => console.log(row.name)}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        )}
      </CardContainer>
    </Box>
  );
};
