"use client";

import React from "react";
import { LuLogIn } from "react-icons/lu";
import { Button, Divider, Typography } from "antd";
import { FcGoogle } from "react-icons/fc";
import Logo from "@/components/Logo";
import SigninForm from "@/components/forms/auth/SigninForm";

const { Text } = Typography;

type Props = {};

const Page = (_props: Props) => {
  return (
    <div className="h-full w-full flex flex-col items-center gap-5">
      <div className="w-full py-5 px-3">
        <Logo />
      </div>
      <div className="h-fit w-7/12 flex flex-col items-center gap-2">
        <div className="cursor-pointer border rounded-lg p-3 shadow-sm">
          <LuLogIn className="h-4 w-4" />
        </div>
        <div className="text-center flex flex-col gap-2">
          <Text className="text-black text-2xl font-bold">Welcome back</Text>
          <Text className="font-semibold text-secondary-text text-sm">
            We are happy to see you again.
          </Text>
        </div>
        <div className="flex mt-5 w-full">
          <Button className="w-full font-semibold flex flex-row gap-2 hover:text-primary-button">
            <FcGoogle className="h-4 w-4" />
            <span>Sign in with Google</span>
          </Button>
        </div>
        <Divider>OR</Divider>
        <SigninForm />
      </div>
      <div className="w-full mt-auto px-3 flex justify-between items-center">
        <div className="text-secondary-text text-sm">
          <span>&#169;</span> <span>yaswanth</span>
        </div>
        <div className="text-secondary-text text-sm">
          <span>mallisettiyaswath@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
