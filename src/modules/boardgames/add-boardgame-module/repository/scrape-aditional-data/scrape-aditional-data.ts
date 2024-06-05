export const scrapeAditionalData = async (id: number) => {
  const response = await fetch(`http://localhost:3000/bgg-scrapper/${id}`);

  return response.json();
};
