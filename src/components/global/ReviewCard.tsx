import { cn } from "@/lib/utils";
import { Avatar, Card, Rate } from "antd";
import React from "react";

type Props = {
  name: string;
  avatar: string;
  body: string;
  rating?: number;
  username?: string;
  className?: string;
};

const ReviewCard = ({
  name,
  avatar,
  body,
  rating,
  username,
  className,
}: Props) => {
  return (
    <Card
      className={cn(
        "bg-[#203aa7] outline-none text-white/75 flex flex-col gap-5 h-full w-full",
        className
      )}
    >
      <div className="w-full p-3">{body}</div>
      <div className=" pt-3 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center max-w-fit">
          <Avatar src={avatar} />
          <span>{name}</span>
        </div>
        <Rate className="" disabled defaultValue={rating} />
      </div>
    </Card>
  );
};

export default ReviewCard;
