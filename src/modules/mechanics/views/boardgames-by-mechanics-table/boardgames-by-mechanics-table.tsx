"use client";

import React from "react";

import { CardContainer } from "@/components";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { Mechanic, Mechanics } from "../../";
import { useMechanics } from "../../hooks";

export const BoardgamesByMechanicsTable = () => {
  const { data: mechanics } = useMechanics();

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "boardgames", headerName: "Boardgames" },
  ];

  const mechanicsTableDto = (mechanics: Mechanics | undefined) => {
    if (!mechanics) return [];
    return mechanics.map((mechanics) => formatMechanic(mechanics));
  };

  const formatMechanic = (data: Mechanic) => {
    return {
      id: data.id,
      name: data.name,
      boardgames: data.boardgames?.length ?? 0,
    };
  };

  return (
    <CardContainer sx={{ maxWidth: "600px" }}>
      <Stack spacing={1}>
        <Typography variant="h6">Mechanics:</Typography>
        <Box>
          <DataGrid
            columns={columns}
            rows={mechanicsTableDto(mechanics)}
            density="compact"
            disableColumnResize
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 25,
                },
              },
            }}
            pageSizeOptions={[25]}
          />
        </Box>
      </Stack>
    </CardContainer>
  );
};
