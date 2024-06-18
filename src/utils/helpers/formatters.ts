import { Nullable } from "../types";

export const moneyFormatter = (value: Nullable<number>) => {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value ?? 0);
};
