import { SleeveSize } from "../../types";

export const fetchSleeveSizes = async (): Promise<Array<SleeveSize & { id: number }>> => {
  const response = await fetch(`http://localhost:3000/sleeves/sizes`, {
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
