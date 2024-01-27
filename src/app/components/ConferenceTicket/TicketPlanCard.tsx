import { cn } from "@/utils/styles";
import { ReactNode } from "react";

interface IProps {
  price: string;
  title: {
    text: string;
    icon: ReactNode;
  };
  advantages: {
    text: string;
    makerColor: "green" | "orange";
  }[];
}

const TicketPlanCard = (props: IProps) => {
  const isVip = props.title.text === "ثبت نام VIP";
  const isSoldout = props.title.text === "ثبت نام زودهنگام";

  return (
    <div
      className={cn(
        `flex h-fit w-full flex-col gap-4 rounded-xl border-2 border-zinc-700 py-4 lg:min-h-96 ${
          isVip && "border-orange-500"
        }`,
      )}
    >
      {/* title */}
      <div className="mt-1 flex flex-col items-center gap-2">
        {props.title.icon}
        <p className="text-2xl">{props.title.text}</p>
      </div>
      {/* price */}
      <div className={cn(`bg-zinc-500/30 py-6 ${isVip && "bg-orange-500/30"}`)}>
        <p
          className={cn(
            `text-center text-3xl font-bold ${isVip && "text-orange-500"} ${
              isSoldout && "text-red-500 line-through"
            }`,
          )}
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
  );
};

export default TicketPlanCard;
