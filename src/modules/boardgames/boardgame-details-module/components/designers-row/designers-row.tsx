import React from "react";

import { Boardgame } from "@/interfaces";
import { Skeleton, Typography } from "@mui/material";

type DesignersRowProps = {
  boardgame: Boardgame | undefined;
};

export const DesignersRow = ({ boardgame }: DesignersRowProps) => {
  if (!boardgame) return <Skeleton animation="wave" height={20} />;

  return (
    <Typography variant="body2" color="#dfdfdf">
      Designers:{" "}
      <Typography variant="body1" component="span" color="GrayText">
        {boardgame.designers.map((item) => item.name).join(", ")}
      </Typography>
    </Typography>
  );
};
