import ConferenceLocation from "./components/ConferenceLocation";
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
