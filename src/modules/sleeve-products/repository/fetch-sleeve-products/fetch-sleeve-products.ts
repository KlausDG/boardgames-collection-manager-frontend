import { SleeveProduct } from "../../types";

export const fetchSleeveProducts = async (): Promise<Array<SleeveProduct & { id: number }>> => {
  const response = await fetch(`http://localhost:3000/sleeves/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
};
