import CountDown from "./components/CountDown";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="py-8 space-y-8">
      <HeroSection />
      <CountDown />
    </main>
  );
}
