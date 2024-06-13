import { Boardgame } from "@/interfaces";

export const fetchBoardgames = async () => {
  const response = await fetch(`http://localhost:3000/boardgames/`);

  const jsonResponse = await response.json();

  return jsonResponse as Array<Boardgame>;
};
