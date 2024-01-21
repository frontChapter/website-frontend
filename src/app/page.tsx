import ConferenceLocation from "./components/ConferenceTicket/ConferenceTicket";
import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ConferenceLocation />
    </main>
  );
}
