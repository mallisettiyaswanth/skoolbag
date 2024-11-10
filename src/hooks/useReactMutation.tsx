"use client";
import { useMessage } from "@/context/MessageContext";
import { useMutation } from "@tanstack/react-query";

type Props<TVariables> = {
  mutationFn: (variables: TVariables) => Promise<{
    success?: string;
    error?: string;
  }>;
};

const useReactMutation = <TVariables,>({ mutationFn }: Props<TVariables>) => {
  const { messageApi } = useMessage();
  return useMutation({
    mutationFn,
    onSuccess(data, variables, context) {
      console.log(data);
      messageApi.destroy();
      messageApi.open({
        type: "success",
        content: data.success,
      });
    },
    onMutate(variables) {
      messageApi.open({
        type: "loading",
        content: "Action in progress..",
        duration: 0,
      });
    },
    onError(error, variables, context) {
      messageApi.destroy();
      messageApi.open({
        type: "error",
        content: error.message,
      });
    },
  });
};

export default useReactMutation;
