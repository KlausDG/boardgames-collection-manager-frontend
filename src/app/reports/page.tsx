"use client";

import { BoardgamePricesTable } from "@/modules/boardgame-prices";
import { MechanicsTable } from "@/modules/mechanics";
import { CreatePdfModule } from "@/modules/pdf";
import { MonetaryReports } from "@/modules/reports";
import { Stack } from "@mui/material";

export default function Reports() {
  return (
    <Stack spacing={2}>
      {/* <CollectionReports /> */}
      <MonetaryReports />
      <CreatePdfModule />
      <MechanicsTable />
      <BoardgamePricesTable />
    </Stack>
  );
}
