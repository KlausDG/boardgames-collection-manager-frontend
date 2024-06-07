import { Control, Controller, FieldError, FieldErrorsImpl, Merge, UseFormSetValue } from "react-hook-form";

import { Autocomplete, TextField } from "@mui/material";

import { useAutocompleteInputQuery } from "../../hooks";
import { AddBoardgame } from "../../schema";

type AutocompleteInputProps = {
  control: Control<AddBoardgame>;
  setFormValue: UseFormSetValue<AddBoardgame>;
  setNameObject: (value: { id: string; value: string }) => void;
  error?: Merge<FieldError, FieldErrorsImpl<{ id: string; value: string }>>;
};

export const NameInput = ({ control, setFormValue, setNameObject, error }: AutocompleteInputProps) => {
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
          freeSolo
          loading={isLoading}
          getOptionLabel={(option) => (typeof option === "string" ? option : option.value)}
          isOptionEqualToValue={(option, value) =>
            typeof option === "string" || typeof value === "string" ? option === value : option.value === value.value
          }
          defaultValue={{ id: "", value: "" }}
          onChange={(_, newValue) => {
            field.onChange(newValue);
            selectValue(newValue);
            if (newValue && typeof newValue !== "string") {
              setFormValue("name", newValue.value);
              setNameObject(newValue);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Name" error={!!error} helperText={error?.message} />}
        />
      )}
    />
  );
};
