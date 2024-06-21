"use client";

import { AddSleeveTypeForm, SleeveTypeTable } from "@/modules/sleeve-types";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function Boardgames() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Box display="flex" flexDirection={"column"} gap={2}>
            <AddSleeveTypeForm />
            <SleeveTypeTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
