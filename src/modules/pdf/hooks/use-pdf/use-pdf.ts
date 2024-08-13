import { Boardgame } from "@/interfaces";

import { fetchPdf } from "../../repository";

export const usePdf = () => {
  const generateBoardgamePDF = async (boardgames: Array<Boardgame>, players: Array<number>) => {
    // const pdfDoc = await PDFDocument.create();
    // const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    // let page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    // let { height } = page.getSize();
    // const xPosition = MARGIN + 75;
    // let yPosition = height - 30;

    // const newLine = (lineHeight: number) => {
    //   yPosition -= lineHeight;
    // };

    // const checkForNewPage = () => {
    //   if (yPosition < MARGIN * 3) {
    //     page = pdfDoc.addPage();
    //     yPosition = page.getHeight() - 30;
    //   }
    // };

    // const filteredGames = boardgames
    //   .filter((game) => players.some((count) => game.bestPlayerCount.includes(count)))
    //   .sort((a, b) => {
    //     if (a.bggRank === 0) return 1;
    //     if (b.bggRank === 0) return -1;
    //     return a.bggRank! - b.bggRank!;
    //   });

    // for (const game of filteredGames) {
    //   const mechanicsText = game.mechanics.map((item) => item.name).join(", ");
    //   const lines = textInLines(mechanicsText, font);

    //   await renderImage(page, pdfDoc, yPosition, game.bggId);
    //   renderTitle(page, game, { x: xPosition, y: yPosition - 12 });
    //   newLine(LINE_HEIGHT_MD);
    //   renderInformations(page, game, { x: xPosition, y: yPosition });
    //   newLine(LINE_HEIGHT_SM);
    //   page.drawText(`Language Dependece: ${game.languageDependence}`, {
    //     x: xPosition,
    //     y: yPosition,
    //     size: 10,
    //   });
    //   newLine(LINE_HEIGHT_SM);
    //   renderDesigners(page, game, { x: xPosition, y: yPosition });
    //   newLine(LINE_HEIGHT_MD);
    //   await renderMechanics(page, pdfDoc, game, yPosition);

    //   yPosition -= lines.length * LINE_HEIGHT_SM + 30;

    //   renderSeparator(page, yPosition);

    //   newLine(LINE_HEIGHT_MD);

    //   checkForNewPage();
    // }

    // const pdfBytes = await pdfDoc.save();
    // const blob = new Blob([pdfBytes], { type: "application/pdf" });
    // const url = URL.createObjectURL(blob);
    // window.open(url);
    await fetchPdf(players[0]);
  };

  return {
    generateBoardgamePDF,
  };
};
