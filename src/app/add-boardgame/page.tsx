"use client";

import { AddBoardgameFormProvider, AddBoardGameFormSection } from "@/modules/boardgames/";

export default function AddBoardgame() {
  return (
    <AddBoardgameFormProvider>
      <AddBoardGameFormSection />
    </AddBoardgameFormProvider>
  );
}
