import { PDFPage } from "pdf-lib";

import { Boardgame } from "@/interfaces";

export const renderInformations = (page: PDFPage, game: Boardgame, width: { x: number; y: number; column: number }) => {
  const { x, y, column } = width;

  const separator = (multiplier: number) => {
    return page.drawText("|", {
      x: x + column * multiplier + 30,
      y: y,
      size: 10,
    });
  };

  page.drawText(`${game.language}`, {
    x: x,
    y: y,
    size: 10,
  });

  separator(1);
  page.drawText(`${game.minPlayers} - ${game.maxPlayers} (best ${game.bestPlayerCount})`, {
    x: x + column * 2,
    y: y,
    size: 10,
  });
  separator(3);
  page.drawText(`${game.minPlaytime} - ${game.maxPlaytime} min`, {
    x: x + column * 4,
    y: y,
    size: 10,
  });
  separator(5);
  page.drawText(`${game.weight} weight`, {
    x: x + column * 6,
    y: y,
    size: 10,
  });
};
