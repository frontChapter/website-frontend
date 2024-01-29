import ConferenceLocation from "./components/ConferenceLocation";
import CountDown from "./components/CountDown";
import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Speakers from "./components/Speakers/Speakers";
import Tweets from "@/app/components/Tweets/Tweets";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CountDown />
        <Speakers />
        <ConferenceLocation />
        <Tweets />
      </main>
    </>
  );
}
