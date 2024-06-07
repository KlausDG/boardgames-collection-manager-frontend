export const fetchGameById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/bgg/game/${id}`);

  return response.json();
};
