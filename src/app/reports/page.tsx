"use client";

import { MechanicsTable } from "@/modules/mechanics";
import { CreatePdfModule } from "@/modules/pdf";
import { MonetaryReports, WeightReports } from "@/modules/reports";
import { Stack } from "@mui/material";

export default function Reports() {
  return (
    <Stack spacing={2}>
      <WeightReports />
      <MonetaryReports />
      <CreatePdfModule />
      <MechanicsTable />
    </Stack>
  );
}
