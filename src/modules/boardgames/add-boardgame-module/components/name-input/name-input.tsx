import { Control, Controller, FieldError, FieldErrorsImpl, Merge, UseFormSetValue } from "react-hook-form";

import { Autocomplete, TextField } from "@mui/material";

import { useAutocompleteInputQuery } from "../../hooks";
import { AddBoardgame } from "../../schema";

type AutocompleteInputProps = {
  control: Control<AddBoardgame>;
  setValue: UseFormSetValue<AddBoardgame>;
  error?: Merge<FieldError, FieldErrorsImpl<{ id: string; value: string }>>;
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
          autoComplete
          loading={isLoading}
          getOptionLabel={(option) => option.value}
          defaultValue={{ id: "", value: "" }}
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
