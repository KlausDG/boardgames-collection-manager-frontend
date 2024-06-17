import { Boardgame } from "@/interfaces";

export const fetchBoardgameDetails = async (id: number): Promise<Boardgame> => {
  const response = await fetch(`http://localhost:3000/boardgames/${id}`);
  return await response.json();
};
