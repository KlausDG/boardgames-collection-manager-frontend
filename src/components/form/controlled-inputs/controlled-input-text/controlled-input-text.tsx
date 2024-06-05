import React from "react";

import { FloatLabel } from "primereact/floatlabel";
import { InputText, InputTextProps } from "primereact/inputtext";
import { Controller, FieldValues } from "react-hook-form";

import { ControlledInputDefaultProps } from "../types";

type ControlledInputTextProps<T extends FieldValues> = ControlledInputDefaultProps<T, InputTextProps>;

export const ControlledInputText = <T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: ControlledInputTextProps<T>): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FloatLabel>
          <InputText {...field} id={name} value={field.value} {...props} />
          <label htmlFor={name}>{label}</label>
        </FloatLabel>
      )}
    />
  );
};
