export const registerSleeveType = async (dto: any) => {
  const response = await fetch(`http://localhost:3000/sleeves/types`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify({ message: errorData.message, status: response.status }));
  }

  return response.json();
};
