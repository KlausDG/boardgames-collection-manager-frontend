import { useFetchBoardgames } from "@/modules/boardgames/boardgames-table-module/hooks";

import { purchasedPricesDto } from "../../dto";

type UsePurchasedPricesProps = {
  isExpansion?: boolean;
};

export const usePurchasedPrices = ({ isExpansion = false }: UsePurchasedPricesProps = {}) => {
  let filters: any = [{ key: "isExpansion", value: isExpansion, isLinked: false }];
  if (isExpansion) {
    filters.push({ key: "category", value: "EXPANSION", isLinked: false });
  }
  const { data, isLoading } = useFetchBoardgames(filters);

  return {
    data: purchasedPricesDto(data) || [],
    isLoading,
  };
};
