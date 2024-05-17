import { useState } from "react";

import { useDebounce } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { fetchGamesByName } from "../../repository";

export const useAutocompleteInputQuery = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  console.log({ debouncedInputValue });

  const fetch = async (name: string) => {
    const apiResponse = await fetchGamesByName(name);

    console.log(apiResponse);

    return apiResponse.items.map((item) => item.name);
  };

  const { data: options = [], isLoading } = useQuery({
    queryKey: ["options", debouncedInputValue],
    queryFn: () => fetch(debouncedInputValue),
    enabled: !!debouncedInputValue && !selectedValue,
  });

  console.log(options);

  return {
    options,
    isLoading,
    updateInput: setInputValue,
    selectValue: setSelectedValue,
    value: inputValue,
  };
};
