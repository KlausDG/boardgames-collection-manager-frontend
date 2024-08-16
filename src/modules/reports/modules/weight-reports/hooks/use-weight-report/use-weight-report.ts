import { useQuery } from "@tanstack/react-query";

import { weightReportDto } from "../../dto";
import { fetchWeightReport } from "../../repository";
import { WeightReport } from "../../types";

export const useWeightReport = () => {
  return useQuery<WeightReport>({
    queryKey: ["weight-report"],
    queryFn: async () => {
      try {
        const apiResponse = await fetchWeightReport();
        return weightReportDto(apiResponse);
      } catch (error) {
        console.error("Error fetching weight report: ", error);
        throw error;
      }
    },
  });
};
