import type { MonetaryCategoryType, MonetaryReportResponse } from "../../repository";
import { FreeGamesReportData } from "../../types";

export const monetaryReportDto = (data: MonetaryReportResponse) => {
  const { standalones, expansions, condensed } = data;

  const dataFallback = { sum: 0, avg: 0 };

  return {
    standalones: formatCategoryData(standalones) || dataFallback,
    expansions: formatCategoryData(expansions) || dataFallback,
    condensed: formatCategoryData(condensed) || dataFallback,
  };
};

export const freeGamesDto = (data: FreeGamesReportData) => {
  return (
    data || {
      standalones: 0,
      expansions: 0,
      condensed: 0,
    }
  );
};

const formatCategoryData = (data: MonetaryCategoryType) => {
  return {
    sum: data._sum.purchasedPrice,
    avg: data._avg.purchasedPrice,
  };
};
