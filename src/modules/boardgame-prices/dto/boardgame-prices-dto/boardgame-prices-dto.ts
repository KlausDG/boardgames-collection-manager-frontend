import { Boardgame } from "@/interfaces";
import { moneyFormatter } from "@/utils/helpers";

const columns = [
  { field: "name", headerName: "Name", width: 230 },
  { field: "purchasedPrice", headerName: "Purchased Price", width: 200 },
];

const boardgamePricesTableDto = (boardgames: Array<Boardgame> | undefined) => {
  if (!boardgames) return [];
  return boardgames.map((boardgame) => format(boardgame));
};

const format = (data: Boardgame) => {
  return {
    id: data.name,
    name: data.name,
    purchasedPrice: moneyFormatter(data.purchasedPrice),
  };
};

export { boardgamePricesTableDto, columns };
