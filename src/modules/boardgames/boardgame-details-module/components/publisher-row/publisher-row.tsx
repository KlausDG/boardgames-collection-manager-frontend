import React from "react";

import { Boardgame } from "@/interfaces";
import { Skeleton, Typography } from "@mui/material";

type PublisherRowProps = {
  boardgame: Boardgame | undefined;
};

export const PublisherRow = ({ boardgame }: PublisherRowProps) => {
  if (!boardgame) return <Skeleton animation="wave" height={20} />;

  return (
    <Typography variant="body2" color="#dfdfdf">
      Publisher:{" "}
      <Typography variant="body1" component="span" color="GrayText">
        {boardgame.publisher.name}
      </Typography>
    </Typography>
  );
};
