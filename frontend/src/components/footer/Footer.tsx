"use client";

import { useGetScreenSize } from "@/utils/hooks/useGetScreenSize";
import logo from "@assets/logo.svg";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculatePercentage";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const { screenSize, isMobile } = useGetScreenSize();
  return (
    <footer className="bg-gray-900 text-white py-[3vw] md:py-[2vw]">
      <div className="px-[10vw] md:px-[5vw] flex  md:flex-row items-center justify-between">
        <div className="flex items-center mb-[1vw] md:mb-0">
          <Image
            alt="Logo"
            src={logo}
            width={
              isMobile
                ? calculateMobilePercentage(32) * screenSize
                : calculateDesktopPercentage(64) * screenSize
            }
            height={
              isMobile
                ? calculateMobilePercentage(32) * screenSize
                : calculateDesktopPercentage(64) * screenSize
            }
          />
          <span className="font-bold text-[4vw] md:text-[2vw]">Your Store</span>
        </div>
        <div className="text-[2vw] md:text-[1vw] flex flex-col gap-y-[1.5vw] md:gap-y-[0.75vw]">
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};
