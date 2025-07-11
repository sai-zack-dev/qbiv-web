import HeroSection from "@/components/HeroSection"
import DummyContent from "./DummyContent"

function Landing() {
  return (
    <>
      <HeroSection />
      {Array.from({ length: 5 }, (_, i) => (
        <DummyContent key={i} index={i} />
      ))}
    </>
  )
}

export default Landing
