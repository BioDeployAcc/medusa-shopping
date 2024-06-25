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
    <div className="bg-white rounded-lg shadow-lg">
      <div className="relative">
        <Link href={`/product/${id}`}>
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
            className="rounded-t-lg"
          />
        </Link>
        <div className="absolute top-0 right-0 p-2 bg-gray-800 rounded-bl-lg">
          <span className="text-white">${price}</span>
        </div>
      </div>
      <div className="p-4">
        <Link href={`/product/${id}`}>
          <span className="text-lg font-semibold">{name}</span>
        </Link>
        <span className="text-gray-500">{collection}</span>
        <p className="text-gray-700">{handle}</p>
      </div>
    </div>
  );
};
