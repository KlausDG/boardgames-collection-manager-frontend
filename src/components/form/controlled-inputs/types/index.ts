import { Control, FieldValues, Path } from "react-hook-form";

export type ControlledInputDefaultProps<T extends FieldValues, K> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
} & Omit<K, "name">;
