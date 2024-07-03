import React from "react";

import { Chip, Stack, Typography } from "@mui/material";

import { Mechanics } from "../../";

export const MechanicsList = ({ mechanics }: { mechanics: Mechanics }) => {
  return (
    <>
      <Typography variant="h6">Mechanics:</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {mechanics.map((item) => (
          <Chip key={item.name} label={item.name} size="small" />
        ))}
      </Stack>
    </>
  );
};
