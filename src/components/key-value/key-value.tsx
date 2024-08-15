import React from "react";

import { Box, Paper, Skeleton, Typography } from "@mui/material";

import { KeyValueProps } from "./key-value.types";

export const KeyValue = ({ title, data, shouldFormatData = false, renderBackground = true }: KeyValueProps) => {
  const dataToDisplay = typeof data === "number" && shouldFormatData ? data.toFixed(2) : data;

  const content = (
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
  );

  return renderBackground ? <Paper elevation={4}>{content}</Paper> : content;
};
