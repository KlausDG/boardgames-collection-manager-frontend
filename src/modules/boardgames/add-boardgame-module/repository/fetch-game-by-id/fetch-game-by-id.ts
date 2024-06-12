export const fetchGameById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/bgg/game/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify({ message: errorData.message, status: response.status }));
  }

  return response.json();
};
