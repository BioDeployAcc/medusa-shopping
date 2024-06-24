import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import classes from "./ProductInfo.module.scss";

export interface ProductInfoProps {
  product: PricedProduct;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className={classes.container}>
      <div className={classes.textInfo}>
        <h1 className={classes.title}>{product.title}</h1>
        <p className={classes.price}>${product.description}</p>
        <span className={classes.material}>Material: {product.material}</span>
      </div>
      <div className={classes.tags}>
        {product?.tags?.map((tag) => (
          <span key={tag} className={classes.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
