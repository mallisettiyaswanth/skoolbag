"use client";
import { useMessage } from "@/context/MessageContext";
import { useMutation } from "@tanstack/react-query";

type Props<TVariables> = {
  mutationFn: (variables: TVariables) => Promise<{
    success?: string;
    error?: string;
  }>;
  key?: string;
  onSuccesFun?: () => void;
  onErrorFun?: () => void;
};

const useReactMutation = <TVariables,>({
  mutationFn,
  key,
  onSuccesFun,
  onErrorFun,
}: Props<TVariables>) => {
  const { messageApi } = useMessage();

  return useMutation({
    mutationFn,
    onSuccess(data, variables, context) {
      messageApi.open({
        key,
        type: "success",
        content: data.success,
      });
      if (onSuccesFun) onSuccesFun();
    },
    onMutate(variables) {
      messageApi.open({
        key,
        type: "loading",
        content: "Action in progress..",
        duration: 0,
      });
    },
    onError(error, variables, context) {
      messageApi.open({
        key,
        type: "error",
        content: error.message,
      });
      if (onErrorFun) onErrorFun();
    },
  });
};

export default useReactMutation;
