import React from "react";

import { CardContainer } from "@/components";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";

import { fetchSleeveTypes } from "../../repository";
import { SleeveType } from "../../types";

export const SleeveTypeTable = () => {
  const { data: sleeveTypes, isLoading } = useQuery({
    queryKey: ["sleeve-types"],
    queryFn: fetchSleeveTypes,
  });

  const columns = [
    { field: "type", headerName: "Type", maxWidth: 200 },
    { field: "size", headerName: "Size", width: 220 },
  ];

  const sleeveTypesTableDto = (sleeveTypes: Array<SleeveType> | undefined) => {
    if (!sleeveTypes) return [];
    return sleeveTypes.map((sleeveType) => formatSleeveTypes(sleeveType));
  };

  const formatSleeveTypes = ({ type, width, height }: SleeveType) => {
    return {
      id: type,
      type: type,
      size: `${width} x ${height} mm`,
    };
  };

  return (
    <CardContainer>
      <Typography variant="h6">Sleeve Types:</Typography>
      <DataGrid
        sx={{ marginTop: "12px", height: "260px" }}
        columns={columns}
        rows={sleeveTypesTableDto(sleeveTypes)}
        density="compact"
        disableColumnResize
        loading={false}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </CardContainer>
  );
};
