import { grayscale, PDFDocument, rgb, StandardFonts } from "pdf-lib";

import { Boardgame } from "@/interfaces";

import { renderDesigners, renderImage, renderInformations, renderTitle } from "../../pdf-components";
import {
  COLUMN_WIDTH,
  LINE_HEIGHT_MD,
  LINE_HEIGHT_SM,
  MARGIN,
  MAX_TEXT_WIDTH,
  PAGE_HEIGHT,
  PAGE_WIDTH,
  TEXT_SIZE,
} from "../../utils/constants";

export const usePdf = () => {
  const calculateTextWidth = (text, font, fontSize, maxWidth) => {
    const width = font.widthOfTextAtSize(text, fontSize);
    if (width <= maxWidth) {
      return [text];
    }

    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = font.widthOfTextAtSize(currentLine + " " + word, fontSize);

      if (width <= maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    lines.push(currentLine);

    return lines;
  };

  const generateBoardgamePDF = async (boardgames: Array<Boardgame>, players: Array<number>) => {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let { width, height } = page.getSize();
    let yPosition = height - 30;
    const xPosition = MARGIN + 75;

    const newLine = (lineHeight: number) => {
      yPosition -= lineHeight;
    };

    const filteredGames = boardgames
      .filter((game) => players.some((count) => game.bestPlayerCount.includes(count)))
      .sort((a, b) => a.bggRank! - b.bggRank!);

    for (const game of filteredGames) {
      const mechanicsText = game.mechanics.map((item) => item.name).join(", ");
      const lines = calculateTextWidth(mechanicsText, font, TEXT_SIZE, MAX_TEXT_WIDTH);

      await renderImage(page, pdfDoc, yPosition, game.bggId);
      renderTitle(page, game, { x: xPosition, y: yPosition - 12 });
      newLine(LINE_HEIGHT_MD);
      renderInformations(page, game, { x: xPosition, y: yPosition, column: COLUMN_WIDTH });
      newLine(LINE_HEIGHT_SM);
      page.drawText(`Language Dependece: ${game.languageDependence}`, {
        x: xPosition,
        y: yPosition,
        size: 10,
      });
      newLine(LINE_HEIGHT_SM);
      renderDesigners(page, game, { x: xPosition, y: yPosition });
      newLine(LINE_HEIGHT_MD);
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
      newLine(LINE_HEIGHT_SM);
      lines.forEach((line, index) => {
        page.drawText(line, {
          x: MARGIN,
          y: yPosition - index * LINE_HEIGHT_SM,
          size: 9,
          font: font,
          color: rgb(0.07, 0.35, 0.5),
        });
      });

      yPosition -= lines.length * LINE_HEIGHT_SM + LINE_HEIGHT_SM;

      page.drawText(
        "-------------------------------------------------------------------------------------------------------------------",
        {
          x: 0,
          y: yPosition,
          size: 16,
        }
      );
      newLine(LINE_HEIGHT_MD);

      if (yPosition < MARGIN * 3) {
        page = pdfDoc.addPage();
        yPosition = page.getHeight() - 30;
      }

      // // Check if we need a new page
      // if (yPosition < MARGIN * 3) {
      //   page = pdfDoc.addPage();
      //   yPosition = height - MARGIN;
      // }
    }

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return {
    generateBoardgamePDF,
  };
};
