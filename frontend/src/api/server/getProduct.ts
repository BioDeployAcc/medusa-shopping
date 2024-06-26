import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { storeBaseUrl } from "./base";

export interface ProductSearchResult {
  product: PricedProduct;
}

export async function getProduct(
  id: string
): Promise<PricedProduct | undefined> {
  try {
    const response = await fetch(`${storeBaseUrl}/products/${id}`);
    const data: ProductSearchResult = await response.json();
    return data.product;
  } catch (e) {
    console.log(e);
  }
}
