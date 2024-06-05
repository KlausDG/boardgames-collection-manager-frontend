import React from "react";

import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea, InputTextareaProps } from "primereact/inputtextarea";
import { Controller, FieldValues } from "react-hook-form";

import { ControlledInputDefaultProps } from "../types";

type ControlledInputTextareaProps<T extends FieldValues> = ControlledInputDefaultProps<T, InputTextareaProps>;

export const ControlledInputTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: ControlledInputTextareaProps<T>): React.ReactElement => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FloatLabel>
          <InputTextarea {...field} id={name} value={field.value} {...props} />
          <label htmlFor={name}>{label}</label>
        </FloatLabel>
      )}
    />
  );
};
