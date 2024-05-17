import { Control, Controller, FieldError, UseFormSetValue } from "react-hook-form";

import { Autocomplete, TextField } from "@mui/material";

import { useAutocompleteInputQuery } from "../../hooks";
import { AddBoardgame } from "../../schema";

type AutocompleteInputProps = {
  control: Control<AddBoardgame>;
  setValue: UseFormSetValue<AddBoardgame>;
  error?: FieldError;
};

export const NameInput = ({ control, setValue, error }: AutocompleteInputProps) => {
  const { isLoading, options, selectValue, updateInput } = useAutocompleteInputQuery();

  return (
    <Controller
      name="name"
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          onInputChange={(_, newInputValue) => {
            updateInput(newInputValue);
          }}
          options={isLoading ? [] : options ?? []}
          // options={options}
          autoComplete
          loading={isLoading}
          onChange={(_, newValue) => {
            selectValue(newValue);
            if (newValue) {
              setValue("name", newValue);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Name" error={!!error} helperText={error?.message} />}
        />
      )}
    />
  );
};
