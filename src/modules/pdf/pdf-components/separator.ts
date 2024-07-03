import { PDFPage } from "pdf-lib";

export const renderSeparator = (page: PDFPage, yPosition: number) => {
  page.drawText(
    "-------------------------------------------------------------------------------------------------------------------",
    {
      x: 0,
      y: yPosition,
      size: 16,
    }
  );
};
