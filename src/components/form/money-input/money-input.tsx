import React from "react";

import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type MoneyInputProps = {
  label: string;
} & TextFieldProps;

export const MoneyInput = React.forwardRef<HTMLDivElement, MoneyInputProps>(
  ({ label, ...props }: MoneyInputProps, ref) => {
    const styles = {
      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      "& input[type=number]": {
        "-moz-appearance": "textfield",
      },
    };

    return (
      <TextField
        {...props}
        type="number"
        fullWidth
        ref={ref}
        label={label}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          sx: styles,
        }}
      />
    );
  }
);
