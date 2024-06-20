import { Path } from "react-hook-form";

export type ValidationError<T> = {
  field: Path<T>;
  message: string;
};

export type ErrorResponse<T> = {
  statusCode: number;
  message: string;
  errors: ValidationError<T>[];
};
