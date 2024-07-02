import { PDFDocument, PDFPage } from "pdf-lib";

import { IMAGE_HEIGHT, MARGIN } from "../utils/constants";
import { fetchImage } from "../utils/helpers";

export const renderImage = async (page: PDFPage, pdfDoc: PDFDocument, yPosition: number, id: number) => {
  const imgUrl = `/images/${id}.png`;
  const { base64, width: imgWidth, height: imgHeight } = await fetchImage(imgUrl);
  const img = await pdfDoc.embedPng(`data:image/png;base64,${base64}`);
  const scaledWidth = (IMAGE_HEIGHT / imgHeight) * imgWidth;

  return page.drawImage(img, {
    x: MARGIN,
    y: yPosition - IMAGE_HEIGHT,
    width: scaledWidth,
    height: IMAGE_HEIGHT,
  });
};
