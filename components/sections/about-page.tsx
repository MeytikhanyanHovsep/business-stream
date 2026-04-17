import Image from "next/image";
import Title from "../ui/title";
import Button from "../ui/button";

export default function AboutPage({ data }: any) {
  const indexStr = data?.indexStr || "[01] ";
  const title = data?.title || "Процесс и гарантии";
  const subtitle =
    data?.subtitle ||
    "Как проходит видеосъёмка и почему наши трансляции не срываются";
  const description =
    data?.description ||
    "Всё прозрачно и под контролем: вы всегда \n знаете, что, когда и как мы делаем";
  const blockTitle =
    data?.blockTitle || "Lorem ipsum dolor sit amet, consectetur";
  const blockText =
    data?.blockText ||
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt distinctio, qui beatae earum tempora laboriosam delectus at rem quod harum ullam nisi praesentium corporis similique. Mollitia voluptas animi pariatur ratione.";
  const imageSrc = data?.image?.asset?.url || "/images/hero-bg.png";

  return (
    <section id="about" className="container pt-[247px] max-md:pt-[103px]">
      <Title
        description={
          <span style={{ whiteSpace: "pre-line" }}>{description}</span>
        }
        title={title}
        index={indexStr}
      >
        <span style={{ whiteSpace: "pre-line" }}>{subtitle}</span>
      </Title>
      <div className="grid grid-cols-2 items-center gap-[100px]">
        <div className="flex flex-col gap-7">
          <h3 className="text-[25px] tracking-[-3%]">{blockTitle}</h3>
          <p className="text-white/79 tracking-[-3%] text-[20px]">
            {blockText}
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
        <Image src={imageSrc} width={700} height={700} alt="about" />
      </div>
    </section>
  );
}
