import { PDFPage } from "pdf-lib";

import { Boardgame } from "@/interfaces";

import { COLUMN_WIDTH } from "../utils/constants";

export const renderInformations = (page: PDFPage, game: Boardgame, width: { x: number; y: number }) => {
  const { x, y } = width;

  const separator = (multiplier: number) => {
    return page.drawText("|", {
      x: x + COLUMN_WIDTH * multiplier + 30,
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
    x: x + COLUMN_WIDTH * 2,
    y: y,
    size: 10,
  });
  separator(3);
  page.drawText(`${game.minPlaytime} - ${game.maxPlaytime} min`, {
    x: x + COLUMN_WIDTH * 4,
    y: y,
    size: 10,
  });
  separator(5);
  page.drawText(`${game.weight} weight`, {
    x: x + COLUMN_WIDTH * 6,
    y: y,
    size: 10,
  });
};
