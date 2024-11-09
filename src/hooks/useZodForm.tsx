import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z, { ZodSchema } from "zod";

const useZodForm = (schema: ZodSchema, defaultValues?: any) => {
  const methods = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { ...defaultValues },
  });

  return methods;
};
export default useZodForm;
