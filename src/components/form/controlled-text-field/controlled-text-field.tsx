import React from "react";

import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Skeleton, TextField, TextFieldProps } from "@mui/material";

type ControlledTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  isLoading?: boolean;
  name: Path<T>;
  skeletonHeight?: string | number;
} & TextFieldProps;

export const ControlledTextField = <T extends FieldValues>({
  control,
  isLoading = false,
  name,
  label,
  skeletonHeight = 56,
  ...props
}: ControlledTextFieldProps<T>) => {
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
