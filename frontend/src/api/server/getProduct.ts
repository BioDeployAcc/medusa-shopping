import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { storeBaseUrl } from "./base";

export async function getProduct(
  id: string
): Promise<PricedProduct | undefined> {
  try {
    const response = await fetch(`${storeBaseUrl}/products/store/${id}`);
    const data: PricedProduct = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
