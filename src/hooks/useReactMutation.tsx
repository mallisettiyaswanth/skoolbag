import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { message } from "antd";
import React from "react";
import { ZodSchema, z } from "zod";

type UseReactMutationProps<TData, TVariables> = {
  mutationFn: MutationFunction<TData, TVariables>;
  schema: ZodSchema<TVariables>;
  options?: UseMutationOptions<TData, Error, TVariables>;
};

interface MutationResponse {
  message?: string;
}

type UseReactMutationOptions<TData, TVariables> = UseMutationOptions<
  TData,
  Error,
  TVariables
> & {
  loadingMessage?: string;
};

function useReactMutation<
  TData extends MutationResponse,
  TVariables extends ZodSchema<any>
>({
  mutationFn,
  schema,
  options,
}: Omit<UseReactMutationProps<TData, z.infer<TVariables>>, "schema"> & {
  schema: TVariables;
  options?: UseReactMutationOptions<TData, z.infer<TVariables>>;
}) {
  const [messageApi, contextHolder] = message.useMessage();

  return useMutation<TData, Error, z.infer<TVariables>>({
    mutationFn,
    onMutate: async (variables: z.infer<TVariables>) => {
      messageApi.open({
        type: "loading",
        content: options?.loadingMessage || "Processing...",
        duration: 0,
        key: "loadingToast",
      });

      if (options?.onMutate) {
        return options.onMutate(variables);
      }
    },
    onSuccess: (data, variables, context) => {
      messageApi.destroy("loadingToast");

      const successMessage = data.message || "Operation successful!";

      messageApi.open({
        type: "success",
        content: successMessage,
      });

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      messageApi.destroy("loadingToast");

      const errorMessage = (error as any)?.message || "An error occurred!";

      messageApi.open({
        type: "error",
        content: errorMessage,
      });

      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    onSettled: (data, error, variables, context) => {
      messageApi.destroy("loadingToast");

      if (options?.onSettled) {
        options.onSettled(data, error, variables, context);
      }
    },
    ...options,
  });
}

export default useReactMutation;
