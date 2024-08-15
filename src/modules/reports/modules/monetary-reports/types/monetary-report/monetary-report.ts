import { ReportFields } from "../../../../types";

export enum ReportKeys {
  Standalones = "standalones",
  Expansions = "expansions",
  Condensed = "condensed",
}

export type ReportKeyType = `${ReportKeys}`;

export type MonetaryReportDataFields = Pick<ReportFields, "sum" | "avg">;

export type MonetaryReportData = {
  [ReportKeys.Standalones]: MonetaryReportDataFields;
  [ReportKeys.Expansions]: MonetaryReportDataFields;
  [ReportKeys.Condensed]: MonetaryReportDataFields;
};

export type FreeGamesReportData = {
  [ReportKeys.Standalones]: number;
  [ReportKeys.Expansions]: number;
  [ReportKeys.Condensed]: number;
};
