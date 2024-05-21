import React from "react";

import { Control, Controller } from "react-hook-form";

import { TextField, TextFieldProps } from "@mui/material";

import { AddBoardgame } from "../../schema";

type ControlledTextFieldProps = {
  control: Control<AddBoardgame>;
  name: keyof AddBoardgame;
} & TextFieldProps;

export const ControlledTextField = ({ control, name, label, ...props }: ControlledTextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField {...field} id={name} label={label} inputProps={{ value: field.value }} {...props} />
      )}
    />
  );
};
