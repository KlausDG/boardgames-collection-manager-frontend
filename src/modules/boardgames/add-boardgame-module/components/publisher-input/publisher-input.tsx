import React from "react";

import { Control, Controller } from "react-hook-form";

import { Autocomplete, Skeleton, TextField } from "@mui/material";

import { AddBoardgame } from "../../schema";

type PublisherInputProps = {
  control: Control<AddBoardgame>;
  options: Array<string>;
  isLoading: boolean;
};
export const PublisherInput = ({ control, options, isLoading }: PublisherInputProps) => {
  return isLoading ? (
    <Skeleton animation="wave" height={56} />
  ) : (
    <Controller
      name="publisher"
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          id="publisher"
          autoComplete
          disableClearable
          options={options}
          getOptionLabel={(option) => option}
          isOptionEqualToValue={(option, value) => option === value}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => <TextField {...params} label="Publisher" />}
        />
      )}
    />
  );
};
