import useReactMutation from "@/hooks/useReactMutation";
import useZodForm from "@/hooks/useZodForm";
import { otpFormSignUp } from "@/schemas";
import { Button, Card, Form, Input } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { FormItem } from "react-hook-form-antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type Props = {
  callback: () => void;
};

const OtpVerificationForm = ({ callback }: Props) => {
  const schema = useMemo(() => otpFormSignUp, []);
  const methods = useZodForm(schema);

  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setResendTimer(20);

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-3/6 h-full py-5 flex flex-col gap-10 items-center">
      <div className="w-full flex flex-col gap-3 items-center">
        <div className="cursor-pointer border rounded-lg p-3 shadow-sm">
          <CheckCircleIcon className="h-4 w-4" />
        </div>
        <h1 className="font-bold text-2xl tracking-wider">Verify yourself</h1>
        <p className="text-sm text-gray-400">
          Otp is sent to your mail, kindly check your mail. If you haven't got
          the mail, you can resend it again.
        </p>
        <Card className="text-sm h-12 p-0 w-full text-black/40 border-none bg-red-100 flex items-center justify-start gap-4">
          <span className="text-red-600 flex gap-2 items-center">
            <ErrorOutlineIcon />
            OTP expires in 5 min
          </span>
        </Card>
      </div>
      <Form
        onFinish={methods.handleSubmit}
        className="flex flex-col w-full gap-5"
      >
        <div className="w-full flex flex-col gap-2">
          <FormItem control={methods.control} name="otp" className="m-0">
            <Input.OTP length={4} />
          </FormItem>
          <div>
            <span className="self-start">
              not got?{" "}
              <Button
                type="link"
                className="p-0"
                onClick={handleResendOtp}
                disabled={isResendDisabled}
              >
                {isResendDisabled
                  ? `Resend OTP in ${resendTimer}s`
                  : "resend otp"}
              </Button>
            </span>
          </div>
        </div>
        <Form.Item className="">
          <Button block type="primary" htmlType="submit" className="font-bold">
            verify
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OtpVerificationForm;
