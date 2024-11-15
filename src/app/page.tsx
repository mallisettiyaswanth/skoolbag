"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/Logo";
import {
  Anchor,
  Badge,
  Button,
  Divider,
  Dropdown,
  MenuProps,
  Rate,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Marquee from "@/components/ui/marquee";
import ReviewCard from "@/components/global/ReviewCard";
import reviewsData from "@/utils/client/reviews.json";
import PricingCard from "@/components/global/PricingCard";
import AvatarCircles from "@/components/ui/avatar-circles";

type PricingPlan = {
  name: string;
  price: string;
  duration: string;
  desc: string;
  features: {
    name: string;
    enable: boolean;
  }[];
  recomendedPlan: boolean;
};

export default function Home() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items: MenuProps["items"] = [
    {
      label: "Verify OTP",
      key: "1",
      onClick: () => router.push("/verify-otp"),
    },
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: "0.00",
      duration: "month",
      desc: "Start your journey at no cost! Access essential features to explore our platform and gain valuable insights without any commitment.",
      features: [
        {
          name: "Access to free courses",
          enable: true,
        },
        {
          name: "Access to premium courses",
          enable: false,
        },
        {
          name: "Course materils",
          enable: false,
        },
        {
          name: "One to One mentorship",
          enable: false,
        },
        {
          name: "Doubt sessions",
          enable: false,
        },
      ],
      recomendedPlan: false,
    },
    {
      name: "Starter",
      price: "30.00",
      duration: "month",
      desc: "Step up with Starter! Enjoy enhanced features and greater flexibility, perfect for beginners looking to make steady progress at an affordable price.",
      features: [
        {
          name: "Access to free courses",
          enable: true,
        },
        {
          name: "Access to premium courses",
          enable: true,
        },
        {
          name: "Course materils",
          enable: true,
        },
        {
          name: "One to One mentorship",
          enable: false,
        },
        {
          name: "Doubt sessions",
          enable: false,
        },
      ],
      recomendedPlan: true,
    },
    {
      name: "Plus",
      price: "45.00",
      duration: "month",
      desc: "Unlock full access to premium features with the Plus plan, crafted for ambitious learners focused on maximizing growth.",
      features: [
        {
          name: "Access to free courses",
          enable: true,
        },
        {
          name: "Access to premium courses",
          enable: true,
        },
        {
          name: "Course materils",
          enable: true,
        },
        {
          name: "One to One mentorship",
          enable: true,
        },
        {
          name: "Doubt sessions",
          enable: true,
        },
      ],
      recomendedPlan: false,
    },
  ];

  return (
    <main className={twMerge("min-h-screen w-full scrollbar-hide")}>
      <nav
        className={twMerge(
          "w-full h-20 flex flex-row justify-between px-14 py-6 items-center fixed transition-all duration-300 z-10",
          isScrolled ? "bg-white/30 backdrop-blur-lg" : ""
        )}
      >
        <Logo />
        <div className="flex gap-16">
          <Anchor
            className="border-none outline-none flex items-center justify-center"
            direction="horizontal"
            items={[
              {
                key: "About",
                href: "#about",
                title: "About",
              },
              {
                key: "Courses",
                href: "#courses",
                title: "Courses",
              },
              {
                key: "Reviews",
                href: "#reviews",
                title: "Reviews",
              },
              {
                key: "Pricing",
                href: "#pricing",
                title: "Pricing",
              },
            ]}
          />
          <div className="flex flex-row gap-5">
            <Button onClick={() => router.push("/sign-up")}>Register</Button>
            <Dropdown.Button
              onClick={() => {
                router.push("/sign-in");
              }}
              type="primary"
              icon={<DownOutlined />}
              menu={{ items }}
            >
              Login
            </Dropdown.Button>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex items-center justify-center py-16 pt-24 scrollbar-hide bg-gradient-to-tr from-[#2b4cdb] via-[#d2d8f1] to-white">
        <div className="w-10/12 h-full flex flex-row px-10">
          <div className="flex-1 font-bold flex flex-col gap-5">
            <div className="flex gap-5 flex-col ">
              <h1 className="text-7xl leading-tight">
                Pack your knowledge in{" "}
                <span className="font-bold text-primary-button">Skool Bag</span>
                .
              </h1>
              <p className="text-black/80 w-2/4">
                Your ultimate hub for learning resources and knowledge-sharing.
              </p>
            </div>
            <div className="w-full flex flex-row gap-5 items-center">
              <Button className="hover:bg-white focus:bg-white bg-white">
                Get Started
              </Button>
              {/* <Button
                variant="outlined"
                className="flex flex-row gap-1 hover:text-white focus:text-white"
                ghost
              >
                <span className="text-white hover:text-white focus:text-white">
                  <PlayCircleIcon />
                </span>
                <span className="text-white hover:text-white focus:text-white ">
                  Explore Courses
                </span>
              </Button> */}
              <AvatarCircles
                avatarUrls={[
                  "https://randomuser.me/api/portraits/men/13.jpg",
                  "https://randomuser.me/api/portraits/men/31.jpg",
                  "https://randomuser.me/api/portraits/men/33.jpg",
                  "https://randomuser.me/api/portraits/men/34.jpg",
                  "https://randomuser.me/api/portraits/men/35.jpg",
                ]}
                numPeople={100}
              />
              <div>
                <Rate defaultValue={4.5} disabled />
                <p className="text-xs text-black/60 w-2/3">
                  (4.5 average rating by users)
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-white flex items-center justify-center">
            <div className="w-10/12 h-96 bg-gray-400 animate-pulse rounded-lg"></div>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen scrollbar-hide p-10 flex flex-col pt-24 gap-10"
        id="about"
      >
        <div className="flex items-center justify-center gap-5 flex-col">
          <p className="px-5 py-1 border bg-primary-button/10 border-primary-button rounded-full">
            Trending courses
          </p>
          <h1 className="font-bold text-6xl w-2/4 text-center">
            Courses Shaping{" "}
            <span className="text-primary-button">Tomorrow's </span>
            Leaders.
          </h1>
          <p className="w-2/5 text-center text-black/70">
            Empower your future with industry-focused courses that build
            essential skills and knowledge. Discover diverse programs crafted to
            prepare you for a dynamic world and drive impactful career growth.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-10/12 h-96 bg-gray-400 animate-pulse rounded-lg"></div>
        </div>
        <div className="flex items-center justify-between border px-10 min-h-24">
          Marquee
        </div>
      </section>
      <section
        className="min-h-screen flex pt-20 flex-col gap-3 items-center"
        id="courses"
      >
        <h1 className="font-bold text-6xl w-1/3 text-center">
          What users say about us <span className="text-primary-button">?</span>{" "}
        </h1>
        <div className="w-full flex-1 h-[500px] overflow-hidden flex items-center justify-center px-28">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] h-[500px] flex-1 "
          >
            {reviewsData["reviews_set_1"].map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] text-black"
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:20s] h-[500px] flex-1 "
          >
            {reviewsData["reviews_set_2"].map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] text-black"
              />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] h-[500px] flex-1 "
          >
            {reviewsData["reviews_set_3"].map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] text-black"
              />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:20s] h-[500px] flex-1 "
          >
            {reviewsData["reviews_set_4"].map((review) => (
              <ReviewCard
                key={review.username}
                {...review}
                className="border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] text-black"
              />
            ))}
          </Marquee>
        </div>
      </section>
      <section
        className="min-h-screen flex items-center justify-center"
        id="reviews"
      >
        Reviews
      </section>
      <section
        className="min-h-screen flex pt-20 flex-col gap-16 items-center"
        id="pricing"
      >
        <div className="w-full flex items-center flex-col gap-4">
          <h1 className="font-bold text-6xl w-1/3 text-center">Pricing.</h1>
          <p className="text-sm w-2/5 text-center text-black/60">
            Choose the perfect plan that fits your needs. Transparent pricing,
            flexible options, and unmatched value to help you achieve your goals
            with ease.
          </p>
        </div>

        <div className="h-full w-full flex flex-row gap-5 px-52 flex-1">
          {pricingPlans.map((plan: PricingPlan) => (
            <PricingCard plan={plan} />
          ))}
        </div>
      </section>
      <section className="min-h-[600px] flex items-end">
        <div className="bg-primary-button w-full p-20 pb-72 flex items-center justify-center"></div>
      </section>
    </main>
  );
}
