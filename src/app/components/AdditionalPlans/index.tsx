// ** data
import { additionalPlans } from "@/data/additionalPlans";

// ** locals
import Plan from "./Plan";
import Header from "./Header";

const AdditionalPlans = () => {
  return (
    <div className="mt-20 flex flex-col gap-8">
      <Header />
      <>
        <div className="m-auto flex flex-col gap-6">
          {additionalPlans.map((plan, index) => (
            <Plan {...plan} key={index} />
          ))}
        </div>
      </>
    </div>
  );
};

export default AdditionalPlans;
