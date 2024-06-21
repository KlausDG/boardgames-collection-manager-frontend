import { SleeveType } from "../../types";

export const registerSleeveType = async (dto: SleeveType): Promise<SleeveType> => {
  const response = await fetch(`http://localhost:3000/sleeves/types`, {
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
