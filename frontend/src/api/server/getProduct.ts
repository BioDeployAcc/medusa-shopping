import { storeBaseUrl } from "./base";

export async function getProduct(id: string) {
  try {
    const response = await fetch(`${storeBaseUrl}/products/store/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
