import React from "react";

import { Control, Controller } from "react-hook-form";

import { Autocomplete, Skeleton, TextField } from "@mui/material";

import { AddBoardgame, DefaultProperties } from "../../schema";

type ExpansionInputProps = {
  control: Control<AddBoardgame>;
  options: Array<DefaultProperties>;
  isLoading: boolean;
};

export const ExpansionInput = ({ control, options, isLoading }: ExpansionInputProps) => {
  return isLoading ? (
    <Skeleton animation="wave" height={56} />
  ) : (
    <Controller
      name="isExpansionFor"
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          id="isExpansionFor"
          disableClearable
          options={options}
          value={options[0]}
          getOptionLabel={(option) => option.value}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => <TextField {...params} label="Expansion For" />}
        />
      )}
    />
  );
};
