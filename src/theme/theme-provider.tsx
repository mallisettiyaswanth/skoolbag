"use client";

import { ConfigProvider } from "antd";

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => (
  <ConfigProvider
    theme={{
      token: {
        fontFamily: "'Mona Sans', sans-serif",
      },
      components: {
        Carousel: {
          colorBgContainer: "rgb(87,148,247)",
          dotActiveWidth: 50,
          dotHeight: 6,
          dotWidth: 11,
          algorithm: true,
        },
        Anchor: {
          lineWidth: 0,
          paddingXXS: 10,
          linkPaddingBlock: 10,
          linkPaddingInlineStart: 24,
          fontSize: 15,
        },
        Badge: {
          colorInfo: "#2b4cdb",
          colorSuccess: "#2b4cdb",
        },
        Button: {
          algorithm: true,
          defaultHoverBorderColor: "rgb(217,217,217)",
          defaultHoverColor: "rgb(0,0,0)",
          controlHeight: 38,
          defaultHoverBg: "rgba(230,226,226,0.2)",
          colorPrimary: "rgb(43,76,219)",
          defaultGhostBorderColor: "rgb(255,255,255)",
          defaultGhostColor: "rgb(255,255,255)",
        },
        Card: {
          fontFamily: "'Mona Sans', sans-serif",
        },
        Input: {
          controlHeight: 38,
        },
        Result: {
          colorSuccess: "#2b4cdb",
        },
        Select: {
          controlHeight: 38,
        },
        Tabs: {
          fontFamily: "'Mona Sans', sans-serif",
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
);

export default ThemeProvider;
