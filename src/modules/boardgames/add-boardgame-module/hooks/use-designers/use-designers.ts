import { useQuery } from "@tanstack/react-query";

import { fetchDesigners } from "../../repository/fetch-designers";

export const useDesigners = () => {
  return useQuery({
    queryKey: ["designers"],
    queryFn: async () => {
      const apiResponse = await fetchDesigners();
      return apiResponse.map((designer) => designer.name);
    },
  });
};
