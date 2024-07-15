import type { WeightReportResponse } from "../../repository";

export const weightReportDto = (data: WeightReportResponse) => {
  const { _avg, _max, _min, countWeightInRanges } = data;

  return {
    avg: _avg,
    max: _max,
    min: _min,
    countInRange: countWeightInRanges,
  };
};
