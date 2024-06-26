export const fetchSleeveBrands = async (): Promise<Array<{ id: number; name: string }>> => {
  const response = await fetch(`http://localhost:3000/sleeves/brands`, {
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
