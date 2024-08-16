import React from "react";

import { KeyValue } from "@/components";
import { Box, Stack, Typography } from "@mui/material";

type WeightReportCard<T> = {
  data: T;
};

export const WeightReportCard = <T extends Record<string, number>>({ data }: WeightReportCard<T>) => {
  return (
    <Box>
      <Typography variant="h6">Weight</Typography>
      <Stack direction="row" spacing={2}>
        {Object.entries(data).map(([key, value]) => (
          <KeyValue key={key} title={key} data={value} shouldFormatData />
        ))}
      </Stack>
    </Box>
  );
};
