import React from "react";

import BackpackIcon from "@mui/icons-material/Backpack";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex items-end max-w-fit justify-center gap-1 text-primary-button",
        className
      )}
    >
      <BackpackIcon className="" />
      <span className="font-bold self-end text-end ">Skool Bag</span>
    </div>
  );
};

export default Logo;
