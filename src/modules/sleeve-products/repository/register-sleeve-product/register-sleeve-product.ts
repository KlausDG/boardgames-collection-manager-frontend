import { SleeveProduct } from "../../types";

export const registerSleeveProduct = async (dto: SleeveProduct): Promise<SleeveProduct> => {
  const response = await fetch(`http://localhost:3000/sleeves/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
};
