"use client";
import React from "react";
import { ReactLenis } from "lenis/react";
import Footer from "./footer";
type Props = {
  children: React.ReactNode;
};
export default function Components({ children }: Props) {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {children as any}
      </ReactLenis>
    </>
  );
}
