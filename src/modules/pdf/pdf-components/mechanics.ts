import { grayscale, PDFDocument, PDFPage, rgb, StandardFonts } from "pdf-lib";

import { Boardgame } from "@/interfaces";

import { LINE_HEIGHT_SM, MARGIN, PAGE_WIDTH } from "../utils/constants";
import { textInLines } from "../utils/helpers";

export const renderMechanics = async (page: PDFPage, pdfDoc: PDFDocument, game: Boardgame, yPosition: number) => {
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const mechanicsText = game.mechanics.map((item) => item.name).join(", ");
  const lines = textInLines(mechanicsText, font);

  page.drawRectangle({
    x: 0,
    y: yPosition + LINE_HEIGHT_SM,
    width: PAGE_WIDTH,
    height: (lines.length * LINE_HEIGHT_SM + LINE_HEIGHT_SM + LINE_HEIGHT_SM) * -1,
    borderWidth: 1,
    borderColor: grayscale(0.5),
    color: rgb(0.75, 0.5, 0.4),
    opacity: 0.5,
    borderOpacity: 0.75,
  });

  page.drawText("Mechanics:", {
    x: MARGIN,
    y: yPosition,
    size: 10,
  });

  yPosition -= LINE_HEIGHT_SM;

  lines.forEach((line, index) => {
    page.drawText(line, {
      x: MARGIN,
      y: yPosition - index * LINE_HEIGHT_SM,
      size: 9,
      font: font,
      color: rgb(0.07, 0.35, 0.5),
    });
  });
};
