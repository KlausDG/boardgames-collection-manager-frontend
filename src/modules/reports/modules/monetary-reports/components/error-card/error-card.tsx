import React from "react";

import { CardContainer } from "@/components";
import { Typography } from "@mui/material";

type ErrorCardProps = {
  message: string;
};

export const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <CardContainer>
      <Typography variant="h6">Error Loading Data</Typography>
      <Typography color="error">{message}</Typography>
    </CardContainer>
  );
};
