import { WeightReportResponse } from "../../repository";

export const weightReportDto = (data: WeightReportResponse) => {
  const { _avg, _max, _min, countWeightInRanges } = data;

  return {
    Min: _min?.weight || 0,
    Max: _max?.weight || 0,
    Average: _avg?.weight || 0,
    countInRange: countWeightInRanges || {
      "1_2": 0,
      "2_3": 0,
      "3_4": 0,
      "4_5": 0,
    },
  };
};
