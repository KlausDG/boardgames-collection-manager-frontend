import type { MonetaryCategoryType, MonetaryReportResponse } from "../../repository";

export const monetaryReportDto = (data: MonetaryReportResponse) => {
  const { standalones, expansions, condensed, free } = data;

  return {
    standalones: formatCategoryData(standalones),
    expansions: formatCategoryData(expansions),
    condensed: formatCategoryData(condensed),
    free,
  };
};

const formatCategoryData = (data: MonetaryCategoryType) => {
  return {
    sum: data._sum.purchasedPrice,
    avg: data._avg.purchasedPrice,
  };
};
