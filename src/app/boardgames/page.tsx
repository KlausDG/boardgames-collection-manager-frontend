"use client";

import { BoardgameDetailsProvider } from "@/modules/boardgames/boardgame-details-module";
import { BoardgamesTableSection } from "@/modules/boardgames/boardgames-table-module";

export default function Boardgames() {
  return (
    <BoardgameDetailsProvider>
      <BoardgamesTableSection />
    </BoardgameDetailsProvider>
  );
}
