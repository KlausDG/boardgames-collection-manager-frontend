import { useQuery } from "@tanstack/react-query";

import { monetaryReportDto } from "../../dto";
import { fetchMonetaryReport } from "../../repository";
import { ReportKeys } from "../../types";
import { MonetaryReport } from "./use-monetary-report.types";

export const useMonetaryReport = () => {
  return useQuery<MonetaryReport>({
    queryKey: ["monetary-report"],
    queryFn: async () => {
      try {
        const apiResponse = await fetchMonetaryReport();

        const data = monetaryReportDto(apiResponse);

        const reportKeys = data ? (Object.keys(data).filter((key) => key !== "free") as ReportKeys[]) : [];
        const free = data?.free || 0;

        const dataFallback = { sum: 0, avg: 0 };

        const monetaryReportData = data
          ? {
              standalones: data.standalones || dataFallback,
              expansions: data.expansions || dataFallback,
              condensed: data.condensed || dataFallback,
            }
          : {
              standalones: dataFallback,
              expansions: dataFallback,
              condensed: dataFallback,
            };

        return {
          reportKeys,
          free,
          monetaryReportData,
        };
      } catch (error) {
        console.error("Error fetching monetary report:", error);
        throw error;
      }
    },
  });
};
