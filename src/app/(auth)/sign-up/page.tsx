"use client";
import SignupBasicForm from "@/components/forms/auth/SignupBasicForm";
import useZodForm from "@/hooks/useZodForm";
import { Button, Result, Steps } from "antd";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";
import { FormProvider } from "react-hook-form";
import { signUpSchema } from "@/schemas";

type Props = {};

const switchForm = (
  formNumber: number,
  setStep: Dispatch<SetStateAction<number>>,
  methods: any,
  onSubmit: (data: any) => void
) => {
  switch (formNumber) {
    case 0:
      return (
        <SignupBasicForm callback={() => methods.handleSubmit(onSubmit)()} />
      );
    case 1:
      return <div>Two</div>;
    case 2:
      return <div>Three</div>;
    case 3:
      return (
        <div>
          <Button type="primary" onClick={methods.handleSubmit(onSubmit)}>
            Submit
          </Button>
        </div>
      );
    case 4:
      return (
        <Result
          status="success"
          title="Congrats on completing the registration"
          extra={[<Button type="primary">Go to Dashboard</Button>]}
        />
      );
  }
};

const Page = (_props: Props) => {
  const [currStep, setStep] = useState<number>(0);
  const schema = useMemo(() => {
    return signUpSchema;
  }, []);

  const methods = useZodForm(schema);

  const onSubmit = (data: any) => {
    // console.log("Form Submitted", data);
    // setStep((prev) => prev + 1);
  };

  return (
    <div className="w-full py-10 flex flex-col gap-5">
      <Steps progressDot items={Array(5).fill({})} current={currStep} />
      <div className="h-full flex items-center justify-center">
        <FormProvider {...methods}>
          {switchForm(currStep, setStep, methods, onSubmit)}
        </FormProvider>
      </div>
    </div>
  );
};

export default Page;
