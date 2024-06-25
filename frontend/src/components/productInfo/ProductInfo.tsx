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
    <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-4 md:p-8">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <span className="text-gray-500 mb-2">Handle: {product.handle}</span>
        <span className="text-gray-500 mb-2">Material: {product.material}</span>
        <p className="text-gray-700">{product.description}</p>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
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
        <div className="text-gray-700 mt-4">
          Selected variant: {product.selectedVariant}
        </div>
        <div className="text-2xl font-bold mt-2">${product.price}</div>
      </div>
    </div>
  );
};
