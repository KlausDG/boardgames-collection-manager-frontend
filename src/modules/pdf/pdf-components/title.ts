import { PDFPage } from "pdf-lib";

import { Boardgame } from "@/interfaces";

export const renderTitle = (page: PDFPage, game: Boardgame, width: { x: number; y: number }) => {
  return page.drawText(`#${game.bggRank || "N/A"} - ${game.name} (${game.yearPublished})`, {
    x: width.x,
    y: width.y,
    size: 16,
  });
};
