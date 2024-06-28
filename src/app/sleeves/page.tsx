"use client";

import { AddSleeveProductForm, SleeveProductsTable } from "@/modules/sleeve-products";
import { AddSleeveSizeForm, SleeveSizeTable } from "@/modules/sleeve-sizes";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Boardgames() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Box display="flex" flexDirection={"column"} gap={2}>
            <AddSleeveSizeForm />
            <SleeveSizeTable />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box display="flex" flexDirection={"column"} gap={2}>
            <AddSleeveProductForm />
            <SleeveProductsTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
