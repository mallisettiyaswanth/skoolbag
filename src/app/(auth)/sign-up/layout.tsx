import Logo from "@/components/global/Logo";
import { Avatar, Card, Carousel, Rate } from "antd";
import React, { useMemo } from "react";
type Props = {
  children: React.ReactNode;
};

interface Review {
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const Layout = ({ children }: Props) => {
  const reviews: Review[] = useMemo(() => {
    return [
      {
        name: "Emily R.",
        comment:
          "An excellent platform! The tools are intuitive, and I love how easy it is to organize my courses.",
        rating: 4.5,
        avatar: "https://example.com/avatars/emily.jpg",
      },
      {
        name: "James P.",
        comment:
          "Very user-friendly and efficient. Great for both beginners and experienced course creators.",
        rating: 4.2,
        avatar: "https://example.com/avatars/james.jpg",
      },
      {
        name: "Sophia L.",
        comment:
          "The best platform I’ve used for managing educational content! Highly recommend.",
        rating: 3.5,
        avatar: "https://example.com/avatars/sophia.jpg",
      },
      {
        name: "Michael T.",
        comment:
          "Good features but could use more customization options. Still, it’s very reliable!",
        rating: 4.2,
        avatar: "https://example.com/avatars/michael.jpg",
      },
      {
        name: "Ava M.",
        comment:
          "Outstanding support team and excellent features for creating professional courses.",
        rating: 4.8,
        avatar: "https://example.com/avatars/ava.jpg",
      },
    ];
  }, []);

  return (
    <div className="flex flex-row min-h-screen w-full bg-background">
      <div className="flex-[2] flex">
        <div className="w-full h-full bg-primary-button text-white p-8">
          <div className="w-full h-full flex justify-between flex-col gap-5">
            <div className="w-full">
              <Logo className="text-white" />
            </div>
            <div className="flex-1 py-20 flex flex-col gap-3">
              <h1 className="text-5xl w-4/5 leading-tight">
                Join Us and Begin Your Journey
              </h1>
              <p className="text-sm w-2/3 text-white/75 tracking-wide">
                Sign up to unlock powerful tools to create, manage, and share
                your courses.
              </p>
            </div>
            <div>
              <Carousel
                autoplay
                className="w-[525px] bg-transparent h-52 items-center flex justify-center text-white p-3"
              >
                {reviews.map((review: Review, index: number) => {
                  return (
                    <Card
                      className="h-2/3 bg-[#203aa7] border-none outline-none text-white/75 flex flex-col gap-5"
                      key={index}
                    >
                      <div className="w-full p-3">{review.comment}</div>
                      <div className="px-3 pt-3 flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                          <Avatar />
                          <span>{review.name}</span>
                        </div>
                        <Rate
                          className=""
                          disabled
                          defaultValue={review.rating}
                        />
                      </div>
                    </Card>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[3] p-3">{children}</div>
    </div>
  );
};

export default Layout;
