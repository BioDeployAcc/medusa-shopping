import classes from "./ProductInfo.module.scss";

export interface ProductInfoProps {
  title: string;
  description: string;
  material: string;
  handle: string;
  price: number;
  tags: string[];
  selectedVariant?: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = (
  product: ProductInfoProps
) => {
  return (
    <div className={classes.container}>
      <div className={classes.textInfo}>
        <h1 className={classes.title}>{product.title}</h1>
        <span className={classes.handle}>Handle: {product.handle}</span>
        <span className={classes.material}>Material: {product.material}</span>
        <p className={classes.description}>{product.description}</p>
      </div>
      <div className={classes.tags}>
        {product?.tags?.map((tag) => (
          <span key={tag} className={classes.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={classes.selectedVariant}>
        Selected variant: {product.selectedVariant}
      </div>
      <div className={classes.price}>${product.price}</div>
    </div>
  );
};
