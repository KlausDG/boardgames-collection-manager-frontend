type InnerMonetaryType = {
  purchasedPrice: number;
};

export type MonetaryCategoryType = {
  _sum: InnerMonetaryType;
  _avg: InnerMonetaryType;
};

export type MonetaryReportResponse = {
  standalones: MonetaryCategoryType;
  expansions: MonetaryCategoryType;
  condensed: MonetaryCategoryType;
  free: number;
};

export const fetchMonetaryReport = async () => {
  const response = await fetch(`http://localhost:3000/reports/monetary`);

  const jsonResponse = await response.json();

  return jsonResponse as MonetaryReportResponse;
};
