"use client";
import React from "react";

import { CardContainer } from "@/components";
import { ErrorCard, LoadingCard } from "@/modules/reports/components";
import { Stack } from "@mui/material";

import { BoardgameWeightTable, WeightReportCard } from "../../components";
import { useWeightReport } from "../../hooks";

export const WeightReports = () => {
  const { data, isLoading, error } = useWeightReport();

  if (isLoading) return <LoadingCard />;
  if (error || !data) return <ErrorCard message={error?.message || "No data available"} />;

  const { countInRange, ...otherData } = data;

  return (
    <CardContainer>
      <Stack spacing={2}>
        <WeightReportCard data={otherData} />

        <BoardgameWeightTable data={countInRange} />
      </Stack>
    </CardContainer>
  );
};
