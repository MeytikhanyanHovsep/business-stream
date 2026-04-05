"use client";
import React from "react";
import { useLenis } from "lenis/react";
import { ModalType, useModalStore } from "@/store/useModalStore";

type Props = {
  children: React.ReactNode;
  type?: "transparent" | "white" | "orange" | "black";
  isSmall?: boolean;
  hasDetails?: boolean;
  style?: string;
  to?: string;
  modal?: ModalType;
  tariffName?: string;
};

export default function Button({
  children,
  to,
  type = "white",
  isSmall = false,
  hasDetails = false,
  style = "",
  modal,
  tariffName = "",
}: Props) {
  const openModal = useModalStore((state) => state.openModal);
  const types = {
    white: "bg-white hover:bg-orange hover:text-white  text-dark",
    transparent:
      "text-white hover:text-black hover:bg-white bg-white/15 backdrop-blur-[44px]",
    orange: "bg-orange text-white hover:text-dark hover:bg-white",
    black: "bg-dark text-white hover:bg-orange hover:text-white",
  };

  const lenis = useLenis();
  const handleScroll = () => {
    lenis?.scrollTo("#" + to, {
      offset: to == "home" ? -100 : 150,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <button
      onClick={() => {
        if (to) {
          return handleScroll();
        }
        if (tariffName) {
          return openModal(modal || "discuss", tariffName);
        }
        return openModal(modal || "contact");
      }}
      className={`${types[type]} ${isSmall ? " px-8 h-[47px] rounded-[7px]" : " h-[56px] px-[40px] rounded-[4px]"} group flex items-center transition-all duration-300 text-[15px] justify-center font-medium cursor-pointer relative ${style}`}
    >
      {hasDetails && (
        <span className="mr-[9px] bg-orange transition-all duration-300 group-hover:bg-white rounded-full w-[4px] h-[4px]">
          <span className="absolute top-[5px] w-[5px]  h-[5px] left-[5px] border border-transparent transition-all duration-300 group-hover:border-l-white  border-l-black group-hover:border-t-white  border-t-black"></span>
          <span className="absolute top-[5px] w-[5px] h-[5px] right-[5px] border border-transparent transition-all duration-300 group-hover:border-r-white  border-r-black group-hover:border-t-white  border-t-black"></span>
          <span className="absolute bottom-[5px] w-[5px] h-[5px] left-[5px] border border-transparent transition-all duration-300 group-hover:border-l-white  border-l-black group-hover:border-b-white  border-b-black"></span>
          <span className="absolute bottom-[5px] w-[5px] h-[5px] right-[5px] border border-transparent transition-all duration-300 group-hover:border-r-white  border-r-black group-hover:border-b-white  border-b-black"></span>
        </span>
      )}
      {children}
    </button>
  );
}
