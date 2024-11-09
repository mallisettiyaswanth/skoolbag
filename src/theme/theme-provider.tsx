"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ThemeContext = createContext<
  | {
      theme: "dark" | "light";
      setTheme: (theme: "dark" | "light") => void;
    }
  | undefined
>(undefined);

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (storedTheme) {
      setTheme(storedTheme);
    }
    setIsClient(true);
  }, []);

  const handleSetTheme = (theme: "dark" | "light") => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {isClient && (
        <ConfigProvider
          theme={{
            algorithm:
              theme === "dark"
                ? antdTheme.darkAlgorithm
                : antdTheme.defaultAlgorithm,
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
              Button: {
                algorithm: true,
                defaultHoverBorderColor: "rgb(217,217,217)",
                defaultHoverColor: "rgb(0,0,0)",
                controlHeight: 38,
                defaultHoverBg: "rgba(230,226,226,0.2)",
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
            },
          }}
        >
          {children}
        </ConfigProvider>
      )}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
