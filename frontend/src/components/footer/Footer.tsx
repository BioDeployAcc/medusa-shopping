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
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Image
            alt="Logo"
            src={logo}
            width={
              isMobile
                ? calculateMobilePercentage(64) * screenSize
                : calculateDesktopPercentage(64) * screenSize
            }
            height={
              isMobile
                ? calculateMobilePercentage(64) * screenSize
                : calculateDesktopPercentage(64) * screenSize
            }
          />
          <span className="font-bold text-lg">Your Store</span>
        </div>
        <div className="text-sm">
          <p className="mb-2">123 Main Street</p>
          <p className="mb-2">City, State ZIP</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};
