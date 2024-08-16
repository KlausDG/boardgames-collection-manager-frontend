import { CardContainer } from "@/components";
import { ErrorCard, LoadingCard } from "@/modules/reports/components";
import { moneyFormatter } from "@/utils/helpers";
import { Box, Stack, Typography } from "@mui/material";

import { ReportCard } from "../../components";
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
            <ReportCard
              key={key}
              title={objMapper[key]}
              headers={["Total", "Average"]}
              data={monetaryReportData[key]}
              dataFormatter={moneyFormatter}
            />
          ))}
          <ReportCard title="Free Games" headers={Object.values(objMapper)} data={free} />
        </Stack>
      </Box>
    </CardContainer>
  );
};
