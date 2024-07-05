import React from "react";

import { CardContainer } from "@/components";
import { useFetchBoardgames } from "@/modules/boardgames/boardgames-table-module/hooks";
import { Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { boardgamePricesTableDto, columns } from "../../dto";

export const BoardgamePricesTable = () => {
  const { data: boardgames, isLoading } = useFetchBoardgames();

  return (
    <CardContainer sx={{ padding: "24px" }}>
      <Stack spacing={1}>
        <Typography variant="h6">Boardgame Purchased Prices</Typography>
        <DataGrid
          columns={columns}
          rows={boardgamePricesTableDto(boardgames)}
          density="compact"
          disableColumnResize
          autoHeight
          loading={isLoading}
          // onRowClick={({ row }) => modal.open(row.id)}
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
