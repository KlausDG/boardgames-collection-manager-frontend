import type { WeightReportResponse } from "../../repository";

export const weightReportDto = (data: WeightReportResponse) => {
  const { _avg, _max, _min, countWeightInRanges } = data;

  return {
    avg: _avg?.weight,
    max: _max?.weight,
    min: _min?.weight,
    countInRange: countWeightInRanges,
  };
};
