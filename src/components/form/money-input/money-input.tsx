import React from "react";

import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

type MoneyInputProps = {
  label?: string;
} & TextFieldProps;

export const MoneyInput = React.forwardRef<HTMLDivElement, MoneyInputProps>(
  ({ label = "", ...props }: MoneyInputProps, ref) => {
    const styles = {
      "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
        margin: 0,
      },
      "& input[type=number]": {
        MozAppearance: "textfield",
      },
    };

    return (
      <TextField
        {...props}
        type="number"
        size="small"
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
