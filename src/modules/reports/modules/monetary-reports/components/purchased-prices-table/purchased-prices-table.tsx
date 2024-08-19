import React from "react";

import { Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { columns, purchasedPricesDto } from "../../dto";

type PurchasedPricesTable = {
  title: string;
  data: ReturnType<typeof purchasedPricesDto>;
  isLoading: boolean;
};

export const PurchasedPricesTable = ({ title, data, isLoading }: PurchasedPricesTable) => {
  return (
    <Paper elevation={4} sx={{ padding: "16px 24px" }}>
      <Stack spacing={1}>
        <Typography>{title}</Typography>
        <DataGrid
          columns={columns}
          rows={data}
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
    </Paper>
  );
};
