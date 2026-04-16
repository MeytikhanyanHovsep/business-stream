import Image from "next/image";
import Title from "../ui/title";
import Button from "../ui/button";

export default function AboutPage() {
  return (
    <section className="container pt-[206px] max-md:pt-[103px]">
      <Title
        description={
          <span style={{ whiteSpace: "pre-line" }}>
            Всё прозрачно и под контролем: вы всегда \n знаете, что, когда и как
            мы делаем`
          </span>
        }
        title="Процесс и гарантии"
        index="[01] "
      >
        <span style={{ whiteSpace: "pre-line" }}>
          Как проходит видеосъёмка и почему наши трансляции не срываются
        </span>
      </Title>
      <div className="grid grid-cols-2 items-center gap-[100px]">
        <div className="flex flex-col gap-7">
          <h3 className="text-[25px] tracking-[-3%]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur{" "}
          </h3>
          <p className="text-white/79 tracking-[-3%] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            distinctio, qui beatae earum tempora laboriosam delectus at rem quod
            harum ullam nisi praesentium corporis similique. Mollitia voluptas
            animi pariatur ratione.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Deserunt distinctio, qui beatae earum tempora
            laboriosam delectus at rem quod harum ullam nisi praesentium
            corporis similique. Mollitia voluptas animi pariatur ratione.
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
        <Image src="/images/hero-bg.png" width={700} height={700} alt="about" />
      </div>
    </section>
  );
}
