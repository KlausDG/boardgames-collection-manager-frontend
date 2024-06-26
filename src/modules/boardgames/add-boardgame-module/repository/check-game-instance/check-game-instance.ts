export const checkGameInstance = async (id: string) => {
  const response = await fetch(`http://localhost:3000/boardgames/exists/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify({ message: errorData.message, status: response.status }));
  }

  return response.json();
};
