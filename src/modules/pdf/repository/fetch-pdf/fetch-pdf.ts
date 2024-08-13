import { saveAs } from "file-saver";

export const fetchPdf = async (players: number) => {
  try {
    const response = await fetch(`http://localhost:3000/pdf/${players}`);
    console.log(response);

    if (response.ok) {
      await response.arrayBuffer().then((res) => {
        const blob = new Blob([res], { type: "application/pdf" });
        saveAs(blob, "invoice.pdf");
      });
    } else {
      console.error("Failed to download PDF");
    }
  } catch (error) {
    console.log(error);
  }
};
