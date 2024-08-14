import { CardContainer, KeyValue } from "@/components";
import { Box, Stack, Typography } from "@mui/material";

import { ErrorCard, LoadingCard, ReportCard } from "../../components";
import { useMonetaryReport } from "../../hooks";
import { ReportKeys } from "../../types";

export const MonetaryReports = () => {
  const { data, isLoading, error } = useMonetaryReport();

  if (isLoading) return <LoadingCard />;
  if (error || !data) return <ErrorCard message={error?.message || "No data available"} />;

  const { reportKeys, free, monetaryReportData } = data;

  const objMapper = {
    [ReportKeys.Standalones]: "Boardgames",
    [ReportKeys.Expansions]: "Expansions",
    [ReportKeys.Condensed]: "Total",
  } as const;

  return (
    <CardContainer>
      <Box>
        <Typography variant="h6">Monetary</Typography>

        <Stack direction="row" spacing={2}>
          {reportKeys.map((key) => (
            <ReportCard key={key} title={objMapper[key]} data={monetaryReportData[key]} />
          ))}
          <KeyValue title="Free Games" data={free} />
        </Stack>
      </Box>
    </CardContainer>
  );
};
