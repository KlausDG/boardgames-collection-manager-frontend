import { useState } from "react";

import { useDebounce } from "@/hooks";
import { useQuery } from "@tanstack/react-query";

import { fetchGamesByName } from "../../repository";

export const useAutocompleteInputQuery = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<{ value: string; id: string } | null>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  const fetch = async (name: string) => {
    const apiResponse = await fetchGamesByName(name);

    return apiResponse.items.map(({ id, name }) => {
      return {
        id,
        value: name,
      };
    });
  };

  const { data: options = [], isLoading } = useQuery({
    queryKey: ["options", debouncedInputValue],
    queryFn: () => fetch(debouncedInputValue),
    enabled: !!debouncedInputValue && !selectedValue,
  });

  return {
    options,
    isLoading,
    updateInput: setInputValue,
    selectValue: setSelectedValue,
    value: inputValue,
  };
};
