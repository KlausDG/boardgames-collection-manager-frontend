type BoardgameData = {
  name: string;
  thumbnail: string;
  description: string;
  yearPublished: number;
  minPlayers: number;
  maxPlayers: number;
  minPlaytime: number;
  maxPlaytime: number;
  designers: Array<string>;
  publishers: Array<string>;
  isExpansion: boolean;
  isExpansionFor: Array<{
    id: number;
    value: string;
  }>;
};

export const fetchGameById = async (id: string): Promise<BoardgameData> => {
  const response = await fetch(`http://localhost:3000/bgg/game/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify({ message: errorData.message, status: response.status }));
  }

  return response.json();
};
