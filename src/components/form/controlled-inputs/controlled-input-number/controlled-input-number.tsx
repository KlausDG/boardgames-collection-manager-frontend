import React from "react";

import { FloatLabel } from "primereact/floatlabel";
import { InputNumber, InputNumberProps } from "primereact/inputnumber";
import { Controller, FieldValues } from "react-hook-form";

import { ControlledInputDefaultProps } from "../types";

type ControlledInputNumberProps<T extends FieldValues> = ControlledInputDefaultProps<T, InputNumberProps>;

export const ControlledInputNumber = <T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: ControlledInputNumberProps<T>): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FloatLabel>
          <InputNumber {...field} id={name} value={field.value} {...props} />
          <label htmlFor={name}>{label}</label>
        </FloatLabel>
      )}
    />
  );
};
