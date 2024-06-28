import React from "react";

import { Boardgame } from "@/interfaces";
import { moneyFormatter } from "@/utils/helpers";
import { Box, Link, Typography } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

type ExpansionsTableSectionProps = {
  expansions: Array<Boardgame> | undefined;
  isLoading?: boolean;
};

export const ExpansionsTableSection = ({ expansions, isLoading = false }: ExpansionsTableSectionProps) => {
  const columns = [
    { field: "name", headerName: "Name", width: 350 },
    { field: "language", headerName: "Language", width: 120 },
    { field: "weight", headerName: "Weight" },
    { field: "purchasedPrice", headerName: "Purchased Value", width: 150 },
    {
      field: "bggLink",
      headerName: "BGG",
      renderCell: ({ value }: GridRenderCellParams) => (
        <Link href={value} underline="hover" target="_blank" variant="caption">
          Link
        </Link>
      ),
    },
  ];

  const expansionsTableDto = (expansions: Array<Boardgame> | undefined) => {
    if (!expansions) return [];
    return expansions.map((expansion) => formatExpansion(expansion));
  };

  const formatExpansion = (data: Boardgame) => {
    return {
      id: data.id,
      name: data.name,
      language: data.language,
      weight: data.weight,
      purchasedPrice: moneyFormatter(data.purchasedPrice),
      bggLink: data.bggLink,
    };
  };

  return (
    <Box sx={{ height: 315, width: "100%" }}>
      <Typography variant="h6">Expansões:</Typography>
      <Box sx={{ height: "calc(100% - 40px)" }}>
        <DataGrid
          columns={columns}
          rows={expansionsTableDto(expansions)}
          density="compact"
          disableColumnResize
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Box>
  );
};
