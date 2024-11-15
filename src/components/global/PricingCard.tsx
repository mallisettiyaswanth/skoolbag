import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Card, Divider } from "antd";
import { cn } from "@/lib/utils";

type Props = {
  plan: PricingPlan;
};

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

const PricingCard = ({ plan }: Props) => {
  const card = (
    <div
      className={cn(
        "min-h-full border rounded-sm flex-1 shadow-md my-10 p-5 text-base flex flex-col gap-3 border-b-primary-button border-b-4 border-primary-button",
        plan.recomendedPlan ? "shadow-xl scale-105 w-full" : ""
      )}
    >
      <div className="flex flex-col gap-7">
        <p className="w-full text-lg text-black/60">{plan.name}</p>
        <div className="flex items-end">
          <h1 className="font-bold text-5xl">$ {plan.price}</h1>
          <span className="text-sm text-black/60 mb-1">/{plan.duration}</span>
        </div>
        <div className="w-full">
          <h3 className="text-black/60 text-sm ">{plan.desc}</h3>
        </div>
        {plan.recomendedPlan ? (
          <Button className="w-full shadow-md" type="primary">
            Subscribe
          </Button>
        ) : (
          <Button className="w-full shadow-md">Subscribe</Button>
        )}
      </div>
      <Divider>
        <p className="text-black/60">Features</p>
      </Divider>
      <div className="flex flex-col gap-3">
        {plan.features
          .sort((a, b) => (a.enable === b.enable ? 0 : a.enable ? -1 : 1))
          .map(({ name, enable }: { name: string; enable: boolean }) => {
            if (enable) {
              return (
                <div className="text-black/80 flex gap-3" key={name}>
                  <CheckIcon className="text-primary-button" />
                  <span>{name}</span>
                </div>
              );
            }
            return (
              <div className="text-black/40 flex gap-3 line-through" key={name}>
                <CloseIcon />
                <span>{name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
  return card;
};

export default PricingCard;
