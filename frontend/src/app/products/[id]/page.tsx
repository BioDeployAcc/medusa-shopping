import { getProduct } from "@/api/server/getProduct";
import SingleProductView from "@/components/singleProductView";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getProduct(id);

  if (!product) {
    return <div>Product not found</div>; //Test if 404 page needed
  }

  return <SingleProductView product={product} onAddToCart={() => {}} />;
};

export default ProductPage;
