import React, { useState } from "react";

import { CardContainer } from "@/components";
import { BoardgameDetailsProvider } from "@/modules/boardgames/boardgame-details-module";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DataGrid } from "@mui/x-data-grid";

import { BoardgamesByMechanicTable, Mechanic, Mechanics } from "../../";
import { useMechanics } from "../../hooks";

export const MechanicsTable = () => {
  const [mechanicFilter, setMechanicFilter] = useState({
    key: "mechanics",
    value: "",
    isLinked: true,
  });

  const handleClick = (value: string) => {
    setMechanicFilter((prevState) => {
      return {
        ...prevState,
        value,
      };
    });
  };

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

  const tableHeader = !!mechanicFilter.value
    ? `Mechanic: ${mechanicFilter.value}`
    : "Select a mechanic in the Mechanics table";

  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <CardContainer sx={{ maxWidth: "600px", padding: "24px" }}>
          <Stack spacing={1}>
            <Typography variant="h6">Mechanics:</Typography>
            <Box>
              <DataGrid
                columns={columns}
                rows={mechanicsTableDto(mechanics)}
                density="compact"
                disableColumnResize
                autoHeight
                onRowClick={({ row }) => handleClick(row.name)}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[10]}
              />
            </Box>
          </Stack>
        </CardContainer>
      </Grid>
      <Grid xs={8}>
        <BoardgameDetailsProvider>
          <BoardgamesByMechanicTable title={tableHeader} filter={mechanicFilter} />
        </BoardgameDetailsProvider>
      </Grid>
    </Grid>
  );
};
