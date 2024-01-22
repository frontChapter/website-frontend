// ** data
import { tickets } from "@/data/tickets";

// ** locals
import { TicketCard } from "./TicketCard";
import { Header } from "./Header";

export const TicketsSection = () => {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <Header />
      <>
        <div className="m-auto flex flex-col gap-6">
          {tickets.map((ticket, index) => (
            <TicketCard ticket={ticket} key={ticket.title + index} />
          ))}
        </div>
      </>
    </div>
  );
};
