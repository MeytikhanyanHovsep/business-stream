import Title from "../ui/title";

export default function About() {
  const items = [
    [
      "300+",
      <>
        событий  Reels <br /> через 48 часов
      </>,
    ],
    [
      "70%",
      <>
        повторных обращений — <br /> показатель доверия и качества.
      </>,
    ],
    [
      "8+",
      <>
        лет опыта в съёмке <br /> и трансляциях событий
      </>,
    ],
  ];

  return (
    <section id="about" className="container max-sm:px-0! ">
      <div className="relative pt-[286px] max-md:pt-[103px]">
        <div className="max-sm:px-[20px]">
          <Title
            description={
              <>
                Нас выбирают компании, фонды и организаторы, для которых <br />{" "}
                важно не просто видео, а живое присутствие в кадре.
              </>
            }
            title="О компании"
            index="[03] "
          >
            Опыт, подтверждённый <br /> результатами
          </Title>
        </div>

        <div className="relative border-2 max-md:border max-md:border-l-0 border-t-0 border-r-0 border-[#444444] grid grid-cols-3 max-lg:grid-cols-1">
          {items.map((e, i) => (
            <div
              className=" border-t-2 -max-sm:mx-[20px] grid place-items-center border-orange md:border-r border-r-[#444] max-md:h-[260px] h-[348px] relative"
              key={i}
            >
              <div className="absolute z-1 h-[134px] top-0 bg-linear-to-b from-orange/35 to-orange/0 w-full "></div>
              <div className="items-start relative z-20 max-lg:min-w-[275px] max-md:min-w-[230px] max-lg:justify-start max-lg:ml-[15px] justify-center gap-[14px] max-md:gap-[10px] flex">
                <div className="bg-orange mt-[15px] max-md:w-[6px] max-md:h-[6px] max-md:mt-[9.5px] rounded-full h-[11px] w-[11px]" />
                <div className="flex w-max gap-1 flex-col items-start">
                  <p className="font-neue font-medium text-[111px] max-xl:text-[70px] leading-[106%] tracking-[-3%]">
                    {e[0]}
                  </p>
                  <p className="opacity-69 max-md:text-[12px] uppercase  text-balance text-[15px] leading-[131%] tracking-[-3%]">
                    {e[1]}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex max-lg:hidden absolute bottom-[30px] left-0 flex-col gap-[20px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="block h-px w-[19px] bg-white/34" />
            ))}
          </div>
          <div className="flex max-lg:hidden absolute bottom-[30px] right-0 flex-col gap-[20px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="block h-px w-[19px] bg-white/34" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
