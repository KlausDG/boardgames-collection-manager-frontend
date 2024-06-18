import { Boardgame } from "@/interfaces";

export const fetchBoardgames = async () => {
  const response = await fetch(`http://localhost:3000/boardgames?filter=basegame`);

  const jsonResponse = await response.json();

  return jsonResponse as Array<Boardgame>;
};
