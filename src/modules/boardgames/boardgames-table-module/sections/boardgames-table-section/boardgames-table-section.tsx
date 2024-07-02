import React from "react";

import { CardContainer } from "@/components";
import { useBoardgameDetails } from "@/modules/boardgames/boardgame-details-module";
import { usePdf } from "@/modules/pdf";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { boardgamesTableDto, columns } from "../../dto";
import { useFetchBoardgames } from "../../hooks";

export const BoardgamesTableSection = () => {
  const { data: boardgames, isLoading } = useFetchBoardgames();
  const { generateBoardgamePDF } = usePdf();
  const { modal } = useBoardgameDetails();

  return (
    <Box sx={{ height: 275, width: "100%" }}>
      <CardContainer elevation={1} sx={{ padding: "24px" }}>
        <Button onClick={() => generateBoardgamePDF(boardgames, [2, 3])}>Generate PDF</Button>
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
