"use client";

import React, { createContext, useContext } from "react";
import { message } from "antd";

const MessageContext = createContext<{
  messageApi: any;
  contextHolder: React.ReactNode;
}>({
  messageApi: null,
  contextHolder: null,
});

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider value={{ messageApi, contextHolder }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  return useContext(MessageContext);
};
