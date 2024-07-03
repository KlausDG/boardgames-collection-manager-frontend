import React from "react";

import { CardContainer } from "@/components";
import { useBoardgameDetails } from "@/modules/boardgames/boardgame-details-module";
import { CreatePdfModule } from "@/modules/pdf";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { boardgamesTableDto, columns } from "../../dto";
import { useFetchBoardgames } from "../../hooks";

export const BoardgamesTableSection = () => {
  const { data: boardgames, isLoading } = useFetchBoardgames();
  const { modal } = useBoardgameDetails();

  return (
    <Box sx={{ height: 275, width: "100%" }}>
      {!!boardgames?.length && <CreatePdfModule boardgames={boardgames} />}
      <CardContainer elevation={1} sx={{ padding: "24px" }}>
        <DataGrid
          columns={columns}
          rows={boardgamesTableDto(boardgames)}
          density="compact"
          disableColumnResize
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
      </CardContainer>
    </Box>
  );
};
