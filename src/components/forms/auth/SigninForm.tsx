import React, { useMemo } from "react";
import { Button, Form, Input } from "antd";
import useZodForm from "@/hooks/useZodForm";
import { signInSchema } from "@/schemas";
import * as z from "zod";
import useReactMutation from "@/hooks/useReactMutation";
// import { signIntoApp } from "@/actions/auth/sign-in/route";
import { FormItem } from "react-hook-form-antd";

type SignInFormData = z.infer<typeof signInSchema>;
type Props = {};

function SigninForm({}: Props) {
  const schema: z.ZodSchema<SignInFormData> = useMemo(() => signInSchema, []);
  const methods = useZodForm(schema);

  // const { mutate: signIn } = useReactMutation({
  //   mutationFn: async () => {},
  //   schema: signInSchema,
  //   options: {
  //     loadingMessage: "Signing in...",
  //   },
  // });

  return (
    <Form
      // onFinish={methods.handleSubmit((data: SignInFormData) => signIn(data))}
      autoComplete="off"
      className="w-full h-full flex flex-col"
      layout="vertical"
    >
      <div className="w-full">
        <FormItem
          control={methods.control}
          layout="vertical"
          label="Email"
          name="email"
          className="flex flex-col"
        >
          <Input placeholder="your-mail@example.com" />
        </FormItem>
      </div>
      <div className="w-full">
        <FormItem
          control={methods.control}
          layout="vertical"
          label="Password"
          name="password"
          className="flex flex-col"
        >
          <Input.Password placeholder="••••••••" />
        </FormItem>
        <div className="flex flex-row justify-between">
          <span>
            are you new?{" "}
            <Button type="link" className="p-0">
              Sign up
            </Button>
          </span>
          <Button type="link" className="p-0">
            Forgot Password?
          </Button>
        </div>
        <Form.Item className="max-h-fit">
          <Button block type="primary" htmlType="submit" className="font-bold">
            Log in
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default SigninForm;
