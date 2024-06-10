"use client";

import { AddBoardgameFormProvider, AddBoardGameFormSection } from "@/modules/boardgames/add-boardgame-module";

export default function Boardgames() {
  //Designers

  return (
    <AddBoardgameFormProvider>
      <AddBoardGameFormSection />
    </AddBoardgameFormProvider>
  );
}
