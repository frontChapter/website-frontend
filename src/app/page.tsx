import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";
import OtherParticipants from "./components/OtherParticipants/OtherParticipants";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OtherParticipants />
    </main>
  );
}
