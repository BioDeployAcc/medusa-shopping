import { Product } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { useProducts } from "medusa-react";

export interface ProductCardProps {
  name: string;
  thumbnail: string;
  price: number;
  collection: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  thumbnail,
  price,
  collection,
}: ProductCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{thumbnail}</p>
      <p>{collection}</p>
      <p>{price}</p>
    </div>
  );
};
