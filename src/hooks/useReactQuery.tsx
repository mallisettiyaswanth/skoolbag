import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

type UseReactQueryProps<TData, TError> = {
  queryKey: string | unknown[];
  queryFn: () => Promise<TData>;
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">;
};

const useReactQuery = <TData = any, TError = unknown>({
  queryFn,
  queryKey,
  options,
}: UseReactQueryProps<TData, TError>): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn,
    ...options,
  });
};

export default useReactQuery;
