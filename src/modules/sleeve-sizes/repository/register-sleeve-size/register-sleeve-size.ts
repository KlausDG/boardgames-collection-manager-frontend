import { SleeveSizeFormData } from "../../types";

export const registerSleeveSize = async (dto: SleeveSizeFormData): Promise<SleeveSizeFormData> => {
  const response = await fetch(`http://localhost:3000/sleeves/sizes`, {
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
