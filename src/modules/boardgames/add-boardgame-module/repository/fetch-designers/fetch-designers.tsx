export const fetchDesigners = async () => {
  const response = await fetch(`http://localhost:3000/designers/`);

  const jsonResponse = await response.json();

  return jsonResponse as Array<string>;
};
