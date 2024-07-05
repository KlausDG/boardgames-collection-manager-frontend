import React from "react";

import { CardContainer } from "@/components";
import { Card, Stack } from "@mui/material";

export const CollectionReports = () => {
  return (
    <CardContainer>
      <Stack direction="row" spacing={2}>
        <Card variant="outlined">Card 1</Card>
        <Card variant="elevation">Card 2</Card>
        <Card>Card 3</Card>
      </Stack>
    </CardContainer>
  );
};
