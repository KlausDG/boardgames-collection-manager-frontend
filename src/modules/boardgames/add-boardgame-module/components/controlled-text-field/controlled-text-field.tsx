import React from "react";

import { Control, Controller } from "react-hook-form";

import { Skeleton, TextField, TextFieldProps } from "@mui/material";

import { AddBoardgame } from "../../schema";

type ControlledTextFieldProps = {
  control: Control<AddBoardgame>;
  isLoading?: boolean;
  name: keyof AddBoardgame;
  skeletonHeight?: string | number;
} & TextFieldProps;

export const ControlledTextField = ({
  control,
  isLoading = false,
  name,
  label,
  skeletonHeight = 56,
  ...props
}: ControlledTextFieldProps) => {
  return isLoading ? (
    <Skeleton animation="wave" height={skeletonHeight} />
  ) : (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState }) => (
        <TextField
          helperText={fieldState.error ? fieldState.error.message : null}
          error={!!fieldState.error}
          onChange={onChange}
          value={value ? value : ""}
          id={name}
          label={label}
          fullWidth
          {...props}
        />
      )}
    />
  );
};
