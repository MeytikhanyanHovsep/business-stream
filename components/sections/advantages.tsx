"use client";
import Title from "../ui/title";

type Item = {
  title: string;
  desc: string;
};

export default function Advantages() {
  const items: Item[] = [
    {
      title: "Живые кадры",
      desc: "Резервные каналы, режиссерский контроль, бесперебойный поток",
    },
    {
      title: "Живые кадры",
      desc: "Динамичная съемка с акцентом на главное",
    },
    {
      title: "Скорость",
      desc: "Готовый Reels уже через 48 часов после съёмки",
    },
    {
      title: "Опыт в B2B и НКО",
      desc: "Знаем, как снимать форумы, презентации и социальные проекты.",
    },
    {
      title: "Прозрачность",
      desc: "Договор, отчётность, без скрытых условий.",
    },
    {
      title: "Всё под ключ",
      desc: "Подготовка, эфир, монтаж, публикация.",
    },
  ];

  return (
    <section id="advantages" className="container relative z-10">
      <div className="relative lg:mt-[100px] max-lg:pt-[180px] pt-[280px]">
        <Title
          description={
            <>
              Мы снимаем и транслируем события, <br /> где важна и атмосфера, и
              результат.
            </>
          }
          title="Преимущества"
          index="[02] "
        >
          Почему выбирают Business Stream для видеосъёмки и трансляций
        </Title>
        <div className="flex items-start max-md:flex-col md:gap-[30px] justify-between">
          <div className="flex pt-[10px] flex-col md:gap-[120px]">
            {items.slice(0, 3).map((e, i) => (
              <div
                key={i}
                className={`flex max-md:gap-[31px] max-md:py-[30px] max-md:border-b border-white/10 ${i == 0 ? "max-md:border-t" : ""}`}
              >
                <div className="flex text-orange md:hidden  text-[13px] pt-px gap-[10px] whitespace-nowrap">
                  <span>{"[ "}</span>0{i + 1}
                  <span>{"] "}</span>
                </div>
                <div className="bg-orange max-xl:hidden my-auto rounded-full h-[11px] min-w-[11px]" />
                <div className="ml-[37px] max-xl:hidden max-[1350px]:mx-[30px] mr-[41px] min-h-full bg-white/21 w-[2px]" />

                <div className="flex max-sm:max-w-[324px] md:max-w-[300px] flex-col gap-[10px]">
                  <p className="flex text-[20px] tracking-[-4%] leading-[131%] uppercase gap-[8px] items-center">
                    <span className="font-neue max-md:hidden max-opacity-56 text-[15px] leading-[131%] tracking-[44%]">
                      {"///"}
                    </span>{" "}
                    {e.title}
                  </p>
                  <p className="text-balance text-[15px] leading-[143%] tracking-[-3%] uppercase opacity-56">
                    {e.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[603px] max-[1200px]:hidden h-[500px] shrink-0" />

          <div className="flex pt-[10px] flex-col md:gap-[120px]">
            {items.slice(3).map((e, i) => (
              <div
                key={i}
                className="flex max-md:gap-[31px]  max-md:py-[30px] max-md:border-b border-white/10"
              >
                <div className="flex text-orange md:hidden  text-[13px] pt-px gap-[10px] whitespace-nowrap">
                  <span>{"[ "}</span>0{i + 1}
                  <span>{"] "}</span>
                </div>
                <div className="flex max-sm:max-w-[324px] md:max-w-[300px] flex-col gap-[10px]">
                  <p className="flex text-[20px] tracking-[-4%] leading-[131%] uppercase gap-[8px] items-center">
                    <span className="font-neue max-md:hidden opacity-56 text-[15px] leading-[131%] tracking-[44%]">
                      {"///"}
                    </span>{" "}
                    {e.title}
                  </p>
                  <p className="text-balance text-[15px] leading-[143%] tracking-[-3%] uppercase opacity-56">
                    {e.desc}
                  </p>
                </div>
                <div className="ml-[20px] max-[1350px]:mr-[30px] max-[1350px]:ml-[10px] max-xl:hidden mr-[41px] min-h-full bg-white/21 w-[2px]" />
                <div className="bg-orange max-xl:hidden my-auto rounded-full h-[11px] min-w-[11px]" />
              </div>
            ))}
          </div>
        </div>
        <p className="absolute max-lg:hidden top-[17px] left-0 max-w-[340px] text-balance text-light-gray tracking-[-3%] text-[15px] leading-[133%]">
          Снимаем форумы, конференции и концерты так, чтобы каждый кадр
          передавал атмосферу момента.
        </p>
        <p className="absolute max-lg:hidden top-[17px] right-0 line-clamp-2 ml-auto text-balance text-light-gray tracking-[-3%] text-[15px] leading-[133%]">
          Сделаем ваше событие вирусным — <br /> чтобы о нём говорили снова и
          снова.
        </p>
      </div>
    </section>
  );
}
