import React from "react";

import BackpackIcon from "@mui/icons-material/Backpack";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  iconWidth?: string;
};

const Logo = ({ className, iconWidth }: Props) => {
  return (
    <div
      className={cn(
        "flex items-end max-w-fit justify-center gap-1 text-primary-button cursor-pointer select-none",
        className
      )}
    >
      <BackpackIcon className={iconWidth} />
      <span className="font-bold self-end text-end ">Skool Bag</span>
    </div>
  );
};

export default Logo;
