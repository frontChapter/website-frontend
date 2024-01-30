import Tweets from "@/app/components/Tweets/Tweets";
import Navbar from "@/components/Navbar";
import "yet-another-react-lightbox/styles.css";
import AdditionalPlans from "./components/AdditionalPlans";
import ConferenceLocation from "./components/ConferenceLocation";
import ConferenceTicket from "./components/ConferenceTicket/ConferenceTicket";
import CountDown from "./components/CountDown";
import Hero from "./components/Hero/Hero";
import Speakers from "./components/Speakers/Speakers";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CountDown />
      <Speakers />
      <Timeline />
      <ConferenceLocation />
      <ConferenceTicket />
      <AdditionalPlans />
      <Tweets />
    </main>
  );
}
