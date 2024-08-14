import { MonetaryReportData, ReportKeys } from "../../types";

export type MonetaryReport = {
  reportKeys: ReportKeys[];
  free: number;
  monetaryReportData: MonetaryReportData;
};
