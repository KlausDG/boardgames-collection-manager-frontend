import { Boardgame } from "@/interfaces";

import { BoardgameFilter } from "../../types";

export const fetchBoardgames = async (filters?: Array<BoardgameFilter>) => {
  const formattedFilters = (filters || []).reduce((acc, { key, value, isLinked }) => {
    acc[key] = {
      value,
      isLinked,
    };
    return acc;
  }, {} as Record<keyof Boardgame, any>);

  const serializeFilters = (filters: typeof formattedFilters) => {
    return Object.keys(filters)
      .map((key) => {
        const filter = filters[key as keyof Boardgame];
        return `${encodeURIComponent(key)}=${encodeURIComponent(filter.value)},${encodeURIComponent(filter.isLinked)}`;
      })
      .join("&");
  };

  const queryString = serializeFilters(formattedFilters);

  const response = await fetch(`http://localhost:3000/boardgames?${queryString}`);

  const jsonResponse = await response.json();

  return jsonResponse as Array<Boardgame>;
};
