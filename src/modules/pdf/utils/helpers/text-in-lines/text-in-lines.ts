import { PDFFont } from "pdf-lib";

import { MAX_TEXT_WIDTH, TEXT_SIZE } from "../../constants";

export const textInLines = (text: string, font: PDFFont) => {
  const width = font.widthOfTextAtSize(text, TEXT_SIZE);
  if (width <= MAX_TEXT_WIDTH) {
    return [text];
  }

  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = font.widthOfTextAtSize(currentLine + " " + word, TEXT_SIZE);

    if (width <= MAX_TEXT_WIDTH) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  lines.push(currentLine);

  return lines;
};
