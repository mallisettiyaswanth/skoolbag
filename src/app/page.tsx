"use client";
import { Button } from "antd";
import { useTheme } from "@/theme/theme-provider";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className={twMerge("min-h-screen w-full", isDarkMode && "bg-black")}>
      <Button
        type="primary"
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      >
        Toggle Theme
      </Button>
    </div>
  );
}
