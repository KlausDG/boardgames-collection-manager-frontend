export const fetchSleeveTypes = async () => {
  const response = await fetch(`http://localhost:3000/sleeves/types`, {
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
