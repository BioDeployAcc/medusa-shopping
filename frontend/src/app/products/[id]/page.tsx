import { getProduct } from "@/api/server/getProduct";
import SingleProductView from "@/components/singleProductView";
import { redirect } from "next/navigation";

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getProduct(id);

  if (!product) {
    redirect("/404");
  }

  return product && <SingleProductView product={product} />;
};

export default ProductPage;
