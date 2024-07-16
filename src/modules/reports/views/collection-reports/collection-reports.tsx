import React from "react";

import { CardContainer } from "@/components";
import { Stack } from "@mui/material";

import { InfoCard } from "../../components";
import { useWeightReport } from "../../hooks";

export const CollectionReports = () => {
  const { data } = useWeightReport();

  return (
    <CardContainer>
      <Stack direction="row" spacing={2}>
        <InfoCard title="Min" data={data?.min} />
        <InfoCard title="Max" data={data?.max} />
        <InfoCard title="Avg" data={data?.avg} />
      </Stack>
    </CardContainer>
  );
};
