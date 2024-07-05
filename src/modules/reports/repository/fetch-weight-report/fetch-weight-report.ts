type InnerWeightType = {
  weigth: number;
};

export type WeightReportResponse = {
  _avg: InnerWeightType;
  _min: InnerWeightType;
  _max: InnerWeightType;
  countWeightInRanges: {
    "1_2": number;
    "2_3": number;
    "3_4": number;
    "4_5": number;
  };
};

export const fetchWeightReport = async () => {
  const response = await fetch(`http://localhost:3000/reports/game-weight`);

  const jsonResponse = await response.json();

  return jsonResponse as WeightReportResponse;
};
