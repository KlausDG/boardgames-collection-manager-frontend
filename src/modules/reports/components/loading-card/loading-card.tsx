import React from "react";

import { CardContainer } from "@/components";
import { Skeleton, Typography } from "@mui/material";

export const LoadingCard = () => {
  return (
    <CardContainer>
      <Typography variant="h6">Loading...</Typography>
      <Skeleton variant="text" />
    </CardContainer>
  );
};
