import ConferenceLocation from "./components/ConferenceLocation";
import ConferenceTicket from "./components/ConferenceTicket/ConferenceTicket";
import CountDown from "./components/CountDown";
import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Speakers from "./components/Speakers/Speakers";
import Tweets from "@/app/components/Tweets/Tweets";
import AdditionalPlans from "./components/AdditionalPlans";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CountDown />
      <Speakers />
      <ConferenceLocation />
      <ConferenceTicket />
      <AdditionalPlans />
      <Tweets />
    </main>
  );
}
