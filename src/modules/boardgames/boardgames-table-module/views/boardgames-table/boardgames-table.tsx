import React from "react";

import { CardContainer } from "@/components";
import { useBoardgameDetails } from "@/modules/boardgames/boardgame-details-module";
import { Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { boardgamesTableDto, columns } from "../../dto";
import { useFetchBoardgames } from "../../hooks";
import { BoardgameFilter } from "../../types";

type BoardgamesTableProps = {
  title?: string;
  filter?: BoardgameFilter;
};

export const BoardgamesTable = ({ title = "Boardgames", filter }: BoardgamesTableProps) => {
  const { data: boardgames, isLoading } = useFetchBoardgames(filter);
  const { modal } = useBoardgameDetails();

  return (
    <CardContainer sx={{ padding: "24px" }}>
      <Stack spacing={1}>
        <Typography variant="h6">{title}</Typography>
        <DataGrid
          columns={columns}
          rows={boardgamesTableDto(boardgames)}
          density="compact"
          disableColumnResize
          autoHeight
          loading={isLoading}
          onRowClick={({ row }) => modal.open(row.id)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Stack>
    </CardContainer>
  );
};
