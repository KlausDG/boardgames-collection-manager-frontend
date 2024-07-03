import { Mechanics } from "../../";

export const fetchMechanics = async () => {
  const response = await fetch(`http://localhost:3000/mechanics/`);

  const jsonResponse = await response.json();

  return jsonResponse as Mechanics;
};
