"use client";

type Props = {
  title: string;
  children: React.ReactNode;
  gap?: number;
  index: string;
  description?: React.ReactNode;
};

export default function Title({
  children,
  gap = 0,
  title,
  index = "[02]",
  description,
}: Props) {
  return (
    <div
      className={`grid grid-cols-3 max-md:gap-[18px]! max-md:grid-cols-1 h-min max-md:mb-[30px] mb-[135px]`}
      style={{ gap: gap + "px" }}
    >
      <h5 className=" tracking-[-2%] max-md:text-[12px] uppercase whitespace-nowrap gap-[2px] flex leading-[133%]">
        <span className="text-silver"> {index} </span>
        <span className="text-orange "> {title}</span>
      </h5>
      <div className={`flex flex-col max-md:gap-[18px]  gap-[35px] col-span-2`}>
        <h3 className="text-[53px] max-md:text-[32px] leading-[106%] tracking-[-4%] text-balance">
          {children}
        </h3>
        {description && (
          <p className="text-[17px] max-md:text-[15px] leading-[131%] tracking-[-3%] text-white/79  text-balance">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
