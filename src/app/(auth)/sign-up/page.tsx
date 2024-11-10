"use client";
import OtpVerificationForm from "@/components/forms/auth/OtpVerificationForm";
import SignupBasicForm from "@/components/forms/auth/SignupBasicForm";

import { Button, Result, Steps } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {};

const switchForm = (
  formNumber: number,
  setStep: Dispatch<SetStateAction<number>>
) => {
  switch (formNumber) {
    case 0:
      return (
        <SignupBasicForm callback={() => setStep((prev: number) => prev + 1)} />
      );
    case 1:
      return (
        <OtpVerificationForm
          callback={() => setStep((prev: number) => prev + 1)}
        />
      );
    case 2:
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
  const [currStep, setStep] = useState<number>(1);

  return (
    <div className="w-full py-10 flex flex-col gap-5">
      <Steps progressDot items={Array(3).fill({})} current={currStep} />
      <div className="h-full flex items-center justify-center">
        {switchForm(currStep, setStep)}
      </div>
    </div>
  );
};

export default Page;
