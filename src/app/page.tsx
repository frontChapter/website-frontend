import CountDown from "./components/CountDown";
import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";
import OtherParticipants from "./components/OtherParticipants/OtherParticipants";
import Tweets from "@/app/components/Tweets/Tweets";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OtherParticipants />
      <CountDown />
      <Tweets />
    </main>
  );
}
