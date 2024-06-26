export interface ProductInfoProps {
  title: string;
  description: string;
  material?: string;
  handle?: string;
  price?: number;
  tags?: string[];
  selectedVariant?: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = (
  product: ProductInfoProps
) => {
  return (
    <div className="flex flex-col rounded-lg w-full">
      <h1 className="text-gray-600 text-[4vw] font-bold mb-[4vw] md:mb-[2vw] md:text-[2vw]">
        {product.title}
      </h1>
      <span className="text-gray-300 text-[3vw] md:text-[1.5vw]">
        Handle: {product.handle}
      </span>
      {product.material && (
        <span className="text-gray-300 text-[2.5vw] md:text-[1.5vw]">
          Material: {product.material}
        </span>
      )}
      <p className="text-gray-700 text-[2.5vw] md:text-[1.25vw]">
        {product.description}
      </p>
      <div className="md:w-1/2">
        <div className="flex flex-wrap">
          {product?.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        {product.selectedVariant && (
          <div className="text-gray-700 text-[2vw] md:text-[1.5vw]">
            Selected variant: {product.selectedVariant}
          </div>
        )}
        {product.price && (
          <div className="text-blue-600 text-[4vw] font-bold mb-[4vw] md:mb-[2vw] md:text-[2vw]">
            ${product.price.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};
