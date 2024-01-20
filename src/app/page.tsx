import Hero from "./components/Hero/Hero";
import Navbar from "@/components/Navbar";
import Speakers from "./components/Speakers/Speakers";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Speakers />
    </main>
  );
}
