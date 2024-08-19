import { CardContainer } from "@/components";
import { ErrorCard, LoadingCard } from "@/modules/reports/components";
import { moneyFormatter } from "@/utils/helpers";
import { Box, Stack, Typography } from "@mui/material";

import { PurchasedPricesTable, ReportCard } from "../../components";
import { useMonetaryReport, usePurchasedPrices } from "../../hooks";
import { ReportKeys } from "../../types";

export const MonetaryReports = () => {
  const { data, isLoading, error } = useMonetaryReport();
  const { data: boardgames, isLoading: isLoadingBoardgames } = usePurchasedPrices();
  const { data: expansions, isLoading: isLoadingExpansions } = usePurchasedPrices({ isExpansion: true });

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
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          Monetary
        </Typography>
        <Stack direction="row" spacing={4}>
          <PurchasedPricesTable title="Boardgames" data={boardgames} isLoading={isLoadingBoardgames} />
          <Stack spacing={2}>
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
          <PurchasedPricesTable title="Expansions" data={expansions} isLoading={isLoadingExpansions} />
        </Stack>
      </Box>
    </CardContainer>
  );
};
