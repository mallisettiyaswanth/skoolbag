"use client";
import { SignUp } from "@/actions/sign-up";
import useZodForm from "@/hooks/useZodForm";
import { signUpSchema } from "@/schemas";
import { COUNTRIES, COUNTRY_CODES } from "@/utils/client/constants";
import { Button, Form, Input, Select } from "antd";
import React, { useMemo, useState } from "react";
import { FormItem } from "react-hook-form-antd";

type Props = {
  callback: () => void;
};

function SignupBasicForm({ callback }: Props) {
  const schema = useMemo(() => {
    return signUpSchema;
  }, []);

  const methods = useZodForm(schema);

  const onSubmit = async (data: any) => {
    await SignUp(data);
    callback();
  };

  const [selectedCountry, setSelectedCountry] = useState<string>(
    methods.watch("country") || ""
  );

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    methods.setValue("country", value);
    methods.setValue("state", "");
  };

  return (
    <div className="w-3/6 h-full py-5 flex flex-col gap-10">
      <div className="w-full">
        <h1 className="font-bold text-2xl tracking-wider">Let's get Start</h1>
      </div>
      <Form
        onFinish={methods.handleSubmit(onSubmit)}
        layout="vertical"
        autoComplete="off"
      >
        <div className="w-full flex gap-3">
          <FormItem
            name="firstname"
            control={methods.control}
            label="First name"
            className="flex-1"
          >
            <Input placeholder="john" />
          </FormItem>
          <FormItem
            name="lastname"
            control={methods.control}
            label="Last name"
            className="flex-1"
          >
            <Input placeholder="smith" />
          </FormItem>
        </div>
        <div>
          <FormItem control={methods.control} name="email" label="Email">
            <Input placeholder="your-email@example.com" />
          </FormItem>
        </div>
        <div className="w-full flex gap-3">
          <FormItem
            className="flex-1"
            label="Country of residence"
            control={methods.control}
            name="country"
          >
            <Select
              placeholder="search country"
              showSearch
              value={selectedCountry}
              onChange={handleCountryChange}
              options={Object.keys(COUNTRIES).map((country: string) => ({
                value: country,
                label: country,
              }))}
            />
          </FormItem>
          <FormItem
            className="flex-1"
            label="State"
            control={methods.control}
            name="state"
          >
            <Select
              showSearch
              placeholder="search state"
              options={COUNTRIES[
                selectedCountry as keyof typeof COUNTRIES
              ]?.map((state: string) => ({
                label: state,
                value: state,
              }))}
            />
          </FormItem>
        </div>
        <div>
          <FormItem
            control={methods.control}
            name="phonenumber"
            label="Phone number"
          >
            <Input
              prefix={
                COUNTRY_CODES[selectedCountry as keyof typeof COUNTRY_CODES]
              }
              placeholder="123456789"
            />
          </FormItem>
        </div>
        <div>
          <FormItem control={methods.control} name="password" label="Password">
            <Input.Password placeholder="••••••••" />
          </FormItem>
        </div>
        <div className="w-full flex justify-end">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SignupBasicForm;
