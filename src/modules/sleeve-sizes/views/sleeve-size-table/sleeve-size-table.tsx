import React from "react";

import { CardContainer } from "@/components";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useSleeveSizes } from "../../hooks";
import { SleeveSize } from "../../types";

export const SleeveSizeTable = () => {
  const { data: sleeveSizes } = useSleeveSizes();

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "size", headerName: "Size" },
  ];

  const sleeveSizesTableDto = (sleeveSizes: Array<SleeveSize> | undefined) => {
    if (!sleeveSizes) return [];
    return sleeveSizes.map((sleeveSize) => formatSleeveSizes(sleeveSize));
  };

  const formatSleeveSizes = ({ name, width, height }: SleeveSize) => {
    return {
      id: name,
      name,
      size: `${width} x ${height} mm`,
    };
  };

  return (
    <CardContainer>
      <Typography variant="h6">Sleeve Sizes:</Typography>
      <DataGrid
        sx={{ marginTop: "12px", height: "274px" }}
        columns={columns}
        rows={sleeveSizesTableDto(sleeveSizes)}
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
