"use client";

import { BoardgamePricesTable } from "@/modules/boardgame-prices";
import { MechanicsTable } from "@/modules/mechanics";
import { CreatePdfModule } from "@/modules/pdf";

export default function Reports() {
  return (
    <>
      <CreatePdfModule />
      <MechanicsTable />
      <BoardgamePricesTable />
    </>
  );
}
