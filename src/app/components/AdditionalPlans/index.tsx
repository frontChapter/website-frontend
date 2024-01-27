// ** data
import { tickets } from "@/data/tickets";

// ** locals
import Plan from "./Plan";
import Header from "./Header";

const AdditionalPlans = () => {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <Header />
      <>
        <div className="m-auto flex flex-col gap-6">
          {tickets.map((ticket, index) => (
            <Plan ticket={ticket} key={ticket.title + index} />
          ))}
        </div>
      </>
    </div>
  );
};

export default AdditionalPlans;
