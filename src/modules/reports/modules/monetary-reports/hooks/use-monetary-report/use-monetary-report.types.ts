import { FreeGamesReportData, MonetaryReportData, ReportKeys } from "../../types";

export type MonetaryReport = {
  reportKeys: ReportKeys[];
  free: FreeGamesReportData;
  monetaryReportData: MonetaryReportData;
};
