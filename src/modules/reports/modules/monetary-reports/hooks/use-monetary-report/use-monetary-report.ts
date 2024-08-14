import { useQuery } from "@tanstack/react-query";

import { freeGamesDto, monetaryReportDto } from "../../dto";
import { fetchMonetaryReport } from "../../repository";
import { ReportKeys } from "../../types";
import { MonetaryReport } from "./use-monetary-report.types";

export const useMonetaryReport = () => {
  return useQuery<MonetaryReport>({
    queryKey: ["monetary-report"],
    queryFn: async () => {
      try {
        const apiResponse = await fetchMonetaryReport();

        const monetaryReportData = monetaryReportDto(apiResponse);

        return {
          reportKeys: Object.keys(monetaryReportData) as ReportKeys[],
          free: freeGamesDto(apiResponse?.free),
          monetaryReportData,
        };
      } catch (error) {
        console.error("Error fetching monetary report: ", error);
        throw error;
      }
    },
  });
};
