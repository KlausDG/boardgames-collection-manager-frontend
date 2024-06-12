import React from "react";

import { Paper, PaperProps } from "@mui/material";

type FormSectionContainerProps = PaperProps & {
  children: React.ReactNode;
};

export const FormSectionContainer = ({ children, sx, ...props }: FormSectionContainerProps) => {
  const styles = { padding: "16px", borderRadius: "12px", ...sx };

  return (
    <Paper elevation={8} sx={styles} {...props}>
      {children}
    </Paper>
  );
};
