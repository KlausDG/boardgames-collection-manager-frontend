import React from "react";

import { Box, Paper, Skeleton, Typography } from "@mui/material";

type InfoCardProps = {
  title: string;
  data: string | number | undefined;
  shouldFormatData?: boolean;
};

export const InfoCard = ({ title, data, shouldFormatData = false }: InfoCardProps) => {
  const dataToDisplay = typeof data === "number" && shouldFormatData ? data.toFixed(2) : data;

  return (
    <Paper elevation={4}>
      <Box sx={{ padding: "16px 24px" }}>
        <Typography variant="subtitle1" fontSize={14}>
          {title}
        </Typography>

        {!data ? (
          <Skeleton variant="text" width={28} sx={{ fontSize: "0.875rem" }} />
        ) : (
          <Typography variant="subtitle2">{dataToDisplay}</Typography>
        )}
      </Box>
    </Paper>
  );
};
