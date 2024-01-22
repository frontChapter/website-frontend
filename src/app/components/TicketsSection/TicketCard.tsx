import Image from "next/image";
import {
  RiBusLine,
  RiCalendarLine,
  RiHotelLine,
  RiMapPinTimeLine,
  RiStarFill,
  RiTimeLine,
} from "react-icons/ri";

// ** data
import { Ticket } from "@/data/tickets";

interface TicketCardProps {
  ticket: Ticket;
}
export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div
      className="mx-4 flex min-h-64
   max-w-[850px] flex-col gap-y-5 rounded-xl border-2 border-zinc-700 bg-zinc-800 px-4 md:flex-row-reverse md:gap-4"
    >
      <div className="pt-4 md:border-r md:border-zinc-700 md:pb-4 md:pr-4">
        <Image
          src={ticket.image.desktop.src}
          alt={ticket.image.desktop.alt}
          className="hidden size-52 rounded-xl md:flex"
        />
        <Image
          src={ticket.image.mobile.src}
          alt={ticket.image.mobile.alt}
          className="w-full rounded-xl md:hidden "
        />
      </div>
      <div className="flex flex-1 flex-col  gap-y-5 pb-4 md:items-start md:justify-between md:pt-4">
        <div className="space-y-1">
          <div className=" md:flex md:justify-between">
            <p className=" text-2xl font-bold md:text-start md:text-3xl">
              {ticket.title}
            </p>
            <p className="text-2xl font-bold text-green-500">{ticket.price}</p>
          </div>
          <p className=" text-lg leading-7 text-zinc-200 md:text-start md:text-xl">
            {ticket.description}
          </p>
        </div>
        {ticket.type === "PLACE" ? (
          <div className="w-full">
            <div className="mt-2 flex justify-between">
              <span className=" text-2xl font-semibold text-zinc-300 md:text-start md:text-3xl">{ticket.hotel.name}</span>
              <span className="text-xl text-yellow-500 md:hidden">۵ ستاره</span>
              <div className=" hidden md:flex">
                {Array.from({ length: ticket.hotel.rate.value }).map(
                  (_, index) => (
                    <RiStarFill
                      key={index + ticket.hotel.rate.value}
                      className="text-lg text-yellow-500"
                    />
                  ),
                )}
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="mt-3 flex items-center gap-2">
                <RiTimeLine className="text-xl" />
                <span className="text-zinc-200">{ticket.time}</span>
              </div>
              <div className=" flex items-center gap-2">
                <RiCalendarLine className="text-xl" />
                <span className="text-zinc-200">{ticket.date}</span>
              </div>
            </div>
          </div>
        ) : ticket.type === "TRANSPORT" ? (
          <div className="w-full">
            <div className="mt-3 flex flex-nowrap items-center text-zinc-200">
              <RiMapPinTimeLine className="text-2xl" />
              <hr className="border-1 mx-5 flex-1 border-zinc-700" />
              <RiBusLine className="text-2xl" />
              <hr className="border-1 mx-5 flex-1 border-zinc-700" />
              <RiHotelLine className="text-2xl" />
            </div>
            <div className="mt-3 flex justify-between ">
              <p className="text-lg text-zinc-200">
                {ticket.origin.title}
                <br />
                {ticket.origin.time}
              </p>
              <p className="text-end text-lg text-zinc-200">
                {ticket.destination.title}
                <br />
                {ticket.destination.time}
              </p>
            </div>
          </div>
        ) : ticket.type === "MEET" ? (
          <></>
        ) : null}
      </div>
    </div>
  );
};
