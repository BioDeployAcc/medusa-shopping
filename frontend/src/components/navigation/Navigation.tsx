"use client";

import { useGetScreenSize } from "@/utils/hooks/useGetScreenSize";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculatePercentage";
import Image from "next/image";
import React from "react";

const Navigation: React.FC = () => {
  const { isMobile, screenSize } = useGetScreenSize();
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Company Logo"
          width={
            isMobile
              ? calculateMobilePercentage(32) * screenSize
              : calculateDesktopPercentage(32) * screenSize
          }
          height={
            isMobile
              ? calculateMobilePercentage(32) * screenSize
              : calculateDesktopPercentage(32) * screenSize
          }
        />
        <h1 className="text-lg font-bold">Company Name</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
