"use client";

import { BoardgamePricesTable } from "@/modules/boardgame-prices";
import { MechanicsTable } from "@/modules/mechanics";

export default function Reports() {
  return (
    <>
      <MechanicsTable />
      <BoardgamePricesTable />
    </>
  );
}
