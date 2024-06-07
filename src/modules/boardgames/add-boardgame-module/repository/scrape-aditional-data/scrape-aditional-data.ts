export const scrapeAditionalData = async (id: string) => {
  const response = await fetch(`http://localhost:3000/bgg-scrapper/${id}`);

  return response.json();
};
