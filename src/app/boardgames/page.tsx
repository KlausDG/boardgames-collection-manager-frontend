"use client";

import { BoardgameDetailsProvider } from "@/modules/boardgames/boardgame-details-module";
import { BoardgamesTable } from "@/modules/boardgames/boardgames-table-module";

export default function Boardgames() {
  return (
    <BoardgameDetailsProvider>
      <BoardgamesTable />
    </BoardgameDetailsProvider>
  );
}
