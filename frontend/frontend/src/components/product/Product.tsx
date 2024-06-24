import Image from "next/image";
import classes from "./ProductCard.module.css";
import { useGetScreenSize } from "../../utils/hooks/useGetScreenSize";
import {
  calculateDesktopVw,
  calculateMobileVw,
} from "@/utils/static/calculateVw";

export interface ProductCardProps {
  name: string;
  thumbnail: string;
  price: number;
  collection: string;
  id: string;
}
import Link from "next/link";

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  thumbnail,
  price,
  collection,
}: ProductCardProps) => {
  const { screenSize, isMobile } = useGetScreenSize();
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Link href={`/product/${id}`}>
          <Image
            src={thumbnail}
            alt={name}
            width={
              isMobile
                ? calculateMobileVw(160) * screenSize
                : calculateDesktopVw(285) * screenSize
            }
            height={
              isMobile
                ? calculateMobileVw(250) * screenSize
                : calculateDesktopVw(445) * screenSize
            }
          />
        </Link>
        <Link href={`/product/${id}`}>
          <span className={classes.name}>{name}</span>
        </Link>
        <span className={classes.collection}>{collection}</span>
        <span className={classes.price}>${price}</span>
      </div>
    </div>
  );
};
