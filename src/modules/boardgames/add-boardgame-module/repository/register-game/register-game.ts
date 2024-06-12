import { AddBoardgame } from "../../schema";

export const registerGame = async (dto: AddBoardgame) => {
  const response = await fetch(`http://localhost:3000/boardgames`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify({ message: errorData.message, status: response.status }));
  }

  return response.json();
};
