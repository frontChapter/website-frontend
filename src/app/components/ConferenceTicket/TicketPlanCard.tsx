import { cn } from "@/utils/styles";
import Link from "next/link";
import { ReactNode } from "react";

interface TicketPlanCardProps {
  price: string;
  vip?: boolean;
  soldOut?: boolean;
  title: {
    text: string;
    icon: ReactNode;
  };
  advantages: {
    text: string;
    makerColor: "green" | "orange";
  }[];
}

const TicketPlanCard = (props: TicketPlanCardProps) => {
  return (
    <Link
      href={NEXT_PUBLIC_TICKET_URL ?? "#?"}
      target="_blank"
      className={cn({
        "pointer-events-none": props.soldOut,
      })}
    >
      <div
        className={cn(
          "group flex h-fit w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-4 transition-colors hover:border-orange-500 lg:min-h-96",
          {
            "border-orange-500": props.vip,
          },
        )}
      >
        {/* title */}
        <div className="mt-1 flex flex-col items-center gap-2">
          {props.title.icon}
          <p className="text-2xl">{props.title.text}</p>
        </div>
        {/* price */}
        <div
          className={cn("bg-zinc-500/30 py-6", {
            "bg-orange-500/30": props.vip,
          })}
        >
          <p
            className={cn("text-center text-3xl font-bold", {
              "text-orange-500": props.vip,
              "text-red-500 line-through": props.soldOut,
            })}
          >
            {props.price}
          </p>
        </div>
        {/* advantages */}
        <ul className="mx-11 flex flex-col">
          {props.advantages.map((item, index) => {
            return (
              <li
                key={index}
                className={cn(
                  `list-disc marker:text-xl marker:text-green-500 ${
                    item.makerColor === "orange" && "marker:text-orange-500"
                  }`,
                )}
              >
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
};

export default TicketPlanCard;
