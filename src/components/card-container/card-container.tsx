import React from "react";

import { WithChildren } from "@/utils/types";
import { Paper, PaperProps } from "@mui/material";

type CardContainerProps = PaperProps & WithChildren;

export const CardContainer = ({ children, sx, elevation, ...props }: CardContainerProps) => {
  const styles = { padding: "16px", borderRadius: "12px", ...sx };

  return (
    <Paper elevation={elevation ?? 1} sx={styles} {...props}>
      {children}
    </Paper>
  );
};
