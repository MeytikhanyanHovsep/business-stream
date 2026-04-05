import Image from "next/image";
import Title from "../ui/title";

const steps = [
  {
    icon: "branches.svg",
    width: 28,
    title: (
      <>
        Подготовка <br /> и технический тест
      </>
    ),
    description:
      "Анализируем площадку, разрабатываем схему съёмки и трансляции, тестируем звук, свет, интернет. Утверждаем тайминг, точки съёмки и ключевые планы.",
  },
  {
    icon: "camera.svg",
    width: 42,
    title: (
      <>
        Съёмка <br /> и эфир
      </>
    ),
    description:
      "Команда работает на площадке: режиссёр, операторы, звук, ассистенты. Используем многокамерную систему и синхронный монтаж для трансляций.",
  },
  {
    icon: "video.svg",
    width: 38,
    title: (
      <>
        {" "}
        Контроль и резервирование <br /> каналов
      </>
    ),
    description:
      "Все потоки дублируются. Есть резервный интернет-канал и аварийная камера. На каждом этапе — режиссёрский и технический контроль.",
  },
  {
    icon: "edit.svg",
    width: 34,
    title: (
      <>
        {" "}
        Монтаж <br /> и итоговое видео
      </>
    ),
    description:
      "Быстрый отбор, монтаж и цветокоррекция. Готовый Reels в течение 48 часов + итоговое видео через 5–7 дней.",
  },
];

export default function Process() {
  return (
    <section id="process" className="pt-[245px] max-lg:pt-[80px] container">
      <Title
        description={
          <>
            Всё прозрачно и под контролем: вы всегда <br /> знаете, что, когда и
            как мы делаем
          </>
        }
        title="Процесс и гарантии"
        index="[07] "
      >
        Как проходит видеосъёмка и почему наши трансляции не срываются
      </Title>
      <div className="max-sm:overflow-x-auto no-scrollbar">
        <div className="sm:mt-[150px]! gap-[30px] w-full grid max-lg:grid-cols-2 max-sm:grid-cols-4 max-sm:min-w-max max-lg:gap-y-[140px] max-sm:gap-[14px] grid-cols-4">
          {steps.map((e, i) => (
            <div
              key={i}
              className="max-w-[295px] max-sm:min-w-[280px] max-sm:max-w-[280px] max-sm:h-[393px] pt-[53px] relative  bg-black max-sm:border border-[#2D2D2D] max-sm:pt-[24px] max-sm:pb-[35px] max-sm:gap-[52px] max-sm:pl-[14px] max-sm:pr-[10px] flex flex-col gap-9"
            >
              <div
                className={`text-[201px] max-sm:text-[15px] max-sm:tracking-[-3%] max-sm:top-[24px] max-sm:right-[17px] leading-[96%] text-white/9 top-[-127px] -z-1 absolute ${i == 3 ? "tracking-[-6%] " : "tracking-[-7%] "} `}
              >
                0{i + 1}
              </div>
              <div className="h-[42px] max-sm:h-[31px] flex items-center">
                <Image
                  src={"/images/icons/" + e.icon}
                  height={e.width}
                  width={e.width}
                  alt={e.icon.split(".")[0]}
                />
              </div>

              <h3 className="text-[21px] leading-[104%] tracking-[-3%]">
                {e.title}
              </h3>
              <p className="text-[15px] max-sm:mt-auto max-sm:text-[14px] text-white/79 leading-[131%] tracking-[-3%]">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
