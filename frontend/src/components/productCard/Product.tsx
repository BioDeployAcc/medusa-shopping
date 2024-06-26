"use client";

import Image from "next/image";
import { useGetScreenSize } from "../../utils/hooks/useGetScreenSize";
import {
  calculateDesktopPercentage,
  calculateMobilePercentage,
} from "@/utils/static/calculatePercentage";

export interface ProductCardProps {
  name: string;
  thumbnail: string;
  price: number;
  handle: string;
  collection: string;
  id: string;
}
import Link from "next/link";
import { wordCapitiliser } from "@/utils/static/wordCapitiliser";

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  thumbnail,
  handle,
  price,
  collection,
}: ProductCardProps) => {
  const { screenSize, isMobile } = useGetScreenSize();
  return (
    <div className="bg-white rounded-[0.8vw] md:rounded-[0.4vw] shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        <Link href={`/products/${id}`}>
          <Image
            src={thumbnail}
            alt={name}
            width={
              isMobile
                ? calculateMobilePercentage(160) * screenSize
                : calculateDesktopPercentage(285) * screenSize
            }
            height={
              isMobile
                ? calculateMobilePercentage(250) * screenSize
                : calculateDesktopPercentage(445) * screenSize
            }
            className="rounded-t-[0.8vw] md:rounded-t-[0.4vw] object-cover cursor-pointer relative"
          />
        </Link>
        <div className="absolute top-0 right-0 p-[0.5vw] md:p.[0.25vw] bg-gray-800 rounded-bl-[1vw] md:rounded-bl-[0.5vw]">
          <span className=" text-[2.5vw] md:text-[1.5vw] text-white">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="md:p-[2vw] p-[0.5vw]">
        <Link href={`/products/${id}`}>
          <span className="text-[3vw] md:text-[1.5vw] text-gray-700 font-semibold">
            {name}
          </span>
        </Link>
        <span className="text-gray-500 text-[1.5vw] md:text-[1vw]">
          {collection}
        </span>
        <p className="text-gray-700 text-[1.5vw] md:text-[1vw]">
          {wordCapitiliser(handle)}
        </p>
      </div>
    </div>
  );
};
