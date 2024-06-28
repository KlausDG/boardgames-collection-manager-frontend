import React from "react";

import { CardContainer } from "@/components";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { useSleeveProducts } from "../../hooks";
import { SleeveProduct } from "../../types";

export const SleeveProductsTable = () => {
  const { data: sleeveProducts } = useSleeveProducts();

  const columns = [
    { field: "brand", headerName: "Brand", width: 200 },
    { field: "size", headerName: "Size", width: 170 },
    { field: "category", headerName: "Category", width: 130 },
    { field: "sleevesPerPack", headerName: "Pack's Quantity", width: 130 },
    { field: "inStock", headerName: "In Stock" },
  ];

  const sleeveProductsTableDto = (sleeveProducts: Array<SleeveProduct> | undefined) => {
    if (!sleeveProducts) return [];
    return sleeveProducts.map((sleeveProduct) => formatSleeveSizes(sleeveProduct));
  };

  const formatSleeveSizes = ({ brand, size, stocks, ...props }: SleeveProduct) => {
    return {
      brand: brand.name,
      size: `${size.name} (${size.width} x ${size.height})`,
      inStock: stocks?.reduce((acc, item) => (acc += item.amount), 0) || 0,
      ...props,
    };
  };

  return (
    <CardContainer>
      <Typography variant="h6">Sleeve Products:</Typography>
      <DataGrid
        sx={{ marginTop: "12px", height: "274px" }}
        columns={columns}
        rows={sleeveProductsTableDto(sleeveProducts)}
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
