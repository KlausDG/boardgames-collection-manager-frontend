import { useQuery } from "@tanstack/react-query";

import { fetchGameById } from "../../repository";

export const useAditionalGameData = ({ setValue, setPublishers }) => {
  const fetch = async (id: number) => {
    const apiResponse = await fetchGameById(id);

    if (apiResponse) {
      setValue("thumbnail", apiResponse.thumbnail);
      setValue("description", apiResponse.description);
      setValue("yearPublished", apiResponse.yearPublished);
      setValue("minPlayers", apiResponse.minPlayers);
      setValue("maxPlayers", apiResponse.maxPlayers);
      setValue("minPlaytime", apiResponse.minPlaytime);
      setValue("maxPlaytime", apiResponse.maxPlaytime);
      setValue("designers", apiResponse.designers);
      setValue("publisher", apiResponse.publishers[0]);
      setPublishers(apiResponse.publishers);
    }
  };

  const { data: options = [], isLoading } = useQuery({
    queryKey: ["options"],
    queryFn: fetch,
  });
};

const fetchGameData = async (id: number) => {
  const gameData = await fetchGameById(id);

  if (gameData) {
    setValue("thumbnail", gameData.thumbnail);
    setValue("description", gameData.description);
    setValue("yearPublished", gameData.yearPublished);
    setValue("minPlayers", gameData.minPlayers);
    setValue("maxPlayers", gameData.maxPlayers);
    setValue("minPlaytime", gameData.minPlaytime);
    setValue("maxPlaytime", gameData.maxPlaytime);
    setValue("designers", gameData.designers);
    setValue("publisher", gameData.publishers[0]);
    setPublishers(gameData.publishers);
  }
};
