import { useQuery } from "@tanstack/react-query";

import { weightReportDto } from "../../dto";
import { fetchWeightReport } from "../../repository";

export const useWeightReport = () => {
  return useQuery({
    queryKey: ["weight-report"],
    queryFn: async () => {
      const apiResponse = await fetchWeightReport();

      return weightReportDto(apiResponse);
    },
  });
};
