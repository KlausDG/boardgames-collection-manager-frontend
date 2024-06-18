import React from "react";

import { Boardgame } from "@/interfaces";
import { Box, Link, Skeleton, Typography } from "@mui/material";

type TitleRowProps = {
  boardgame: Boardgame | undefined;
};

export const TitleRow = ({ boardgame }: TitleRowProps) => {
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
      {!boardgame ? (
        <Skeleton animation="wave" height={20} />
      ) : (
        <>
          <Typography variant="h5">{boardgame.name}</Typography>
          <Link href={boardgame.bggLink} underline="hover" target="_blank" variant="caption">
            BGG RANK: {boardgame.bggRank}
          </Link>
        </>
      )}
    </Box>
  );
};
