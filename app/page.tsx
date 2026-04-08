import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";
import Cases from "@/components/sections/cases";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Faq from "@/components/sections/faq";
import Reviews from "@/components/sections/reviews";
import Quiz from "@/components/sections/quiz";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Quiz />
      <Cases />
      <Process />
      <Reviews />
      <Faq />
    </>
  );
}
