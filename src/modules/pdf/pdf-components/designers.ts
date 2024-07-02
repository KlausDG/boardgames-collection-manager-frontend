import { PDFPage } from "pdf-lib";

import { Boardgame } from "@/interfaces";

export const renderDesigners = (page: PDFPage, game: Boardgame, width: { x: number; y: number }) => {
  const { x, y } = width;

  page.drawText(`Designers: ${game.designers.map((item) => item.name).join(", ")}`, {
    x: x,
    y: y,
    size: 10,
  });
};
