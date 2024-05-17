type FetchGamesByNameResponse = {
  items: Array<{ id: string; name: string; category: string }>;
  total: number;
};

export const fetchGamesByName = async (name: string): Promise<FetchGamesByNameResponse> => {
  const response = await fetch(`http://localhost:3000/bgg/games/${name}`);

  return response.json();
};
