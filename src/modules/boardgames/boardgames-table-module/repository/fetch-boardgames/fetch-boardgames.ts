import { Boardgame } from "@/interfaces";

import { BoardgameFilter } from "../../types";

export const fetchBoardgames = async (filter?: BoardgameFilter) => {
  let qs = "";
  if (filter) {
    qs = Object.keys(filter)
      .map((key) => {
        const value = filter[key as keyof BoardgameFilter];
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&");
  }
  console.log(qs);

  const response = await fetch(`http://localhost:3000/boardgames?${qs}`);

  const jsonResponse = await response.json();

  return jsonResponse as Array<Boardgame>;
};
