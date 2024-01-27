// ** data
import { additionalPlans } from "@/data/additionalPlans";

// ** locals
import Plan from "./Plan";
import Header from "./Header";

const AdditionalPlans = () => {
  return (
    <section className="flex flex-col gap-8 py-6 lg:py-12">
      <Header />
      <div className="m-auto flex flex-col gap-6">
        {additionalPlans.map((plan, index) => (
          <Plan {...plan} key={index} />
        ))}
      </div>
    </section>
  );
};

export default AdditionalPlans;
