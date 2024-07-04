import React from "react";

import { BoardgamesTable } from "@/modules/boardgames/boardgames-table-module";
import { BoardgameFilter } from "@/modules/boardgames/boardgames-table-module/types";

type BoardgamesByMechanicTableProps = {
  title: string;
  filter: BoardgameFilter;
};

export const BoardgamesByMechanicTable = ({ title, filter }: BoardgamesByMechanicTableProps) => {
  return <BoardgamesTable title={title} filter={filter} />;
};
