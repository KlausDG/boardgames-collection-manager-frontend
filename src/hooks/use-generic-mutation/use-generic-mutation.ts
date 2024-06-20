import { FieldValues, UseFormSetError } from "react-hook-form";

import { ErrorResponse } from "@/utils/types";
import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";

export const useGenericMutation = <
  TData extends FieldValues,
  TError extends ErrorResponse<TData>,
  TVariables extends FieldValues
>(
  mutationFn: (data: TVariables) => Promise<TData>,
  setError: UseFormSetError<TData>,
  options?: UseMutationOptions<TData, TError, TVariables> & { queryKey: Array<string> }
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables>({
    mutationFn,
    onSuccess: (data, variables, context) => {
      if (options?.queryKey) {
        queryClient.invalidateQueries({ queryKey: options.queryKey });
      }
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (error.errors) {
        error.errors.forEach(({ field, message }) => {
          setError(field, {
            type: "manual",
            message,
          });
        });
      }
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};
