"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const user = useCurrentUser();
  return <div className="w-2/3 overflow-hidden">this is the data</div>;
};

export default Page;
