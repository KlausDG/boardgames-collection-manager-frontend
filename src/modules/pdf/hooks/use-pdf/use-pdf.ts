import { fetchPdf } from "../../repository";

export const usePdf = () => {
  const generateBoardgamePDF = async (players: number) => {
    await fetchPdf(players);
  };

  return {
    generateBoardgamePDF,
  };
};
