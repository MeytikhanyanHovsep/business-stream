import AboutPage from "@/components/sections/about-page";
import Projects from "@/components/sections/cases";
import Gallery from "@/components/sections/gallery";
import Button from "@/components/ui/button";

export default function About() {
  return (
    <>
      <main
        className="w-full pt-[67px] bg-cover bg-center  "
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="container py-[100px] gap-10 items-center justify-center h-full uppercase flex flex-col">
          <h1 className="scale-y-[1.6] tracking-[-2%] leading-[103%] text-[75px] max-2xl:text-[60px] max-lg:text-[45px] max-xs:text-[40px]!">
            Видеосъемка мероприятий
          </h1>
          <p className="sm:max-w-[670px] tracking-[-3%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            consectetur iste, maiores cumque iusto molestias? Quam.
          </p>
          <div className="flex max-sm:w-full max-sm:flex-col gap-[10px] mt-[px]">
            <Button modal="discuss" hasDetails={true} style="max-sm:min-w-full">
              Обсудить проект
            </Button>
            <Button
              modal="audit"
              type="transparent"
              style="w-[184px] max-sm:min-w-full"
            >
              Live-аудит
            </Button>
          </div>
        </div>
      </main>
      <AboutPage />
      {/* <Projects /> */}
      <Gallery />
    </>
  );
}
