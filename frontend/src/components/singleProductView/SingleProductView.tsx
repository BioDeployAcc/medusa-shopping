"use client";

import ProductImages from "../productImages";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductInfo } from "../productInfo/ProductInfo";
import { useMemo, useState } from "react";
import { getVariantPrice } from "medusa-react";
import ProductOptionsForm from "../productOptionsForm";
import { FieldValues } from "react-hook-form";

export interface SingleProductViewProps {
  product: PricedProduct;
}

export const SingleProductView = ({ product }: SingleProductViewProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [quantity, setQuantity] = useState(1);

  const onAddToCart = (values: FieldValues) => {
    console.log(values);
  };

  const selectedVariant = useMemo(() => {
    return product?.variants?.find((variant) => {
      return Object.entries(selectedOptions).every(
        ([key, value]) =>
          variant.options!.find((x) => x === key)?.value === value
      );
    });
  }, [selectedOptions, product.variants]);

  return (
    <div className="flex bg-white flex-col md:flex-row">
      <div className="md:w-1/2">
        <ProductImages
          images={product.images?.map((image) => image.url) || []}
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col justify-between h-full">
          <ProductInfo
            description={product.description || ""}
            handle={product.handle || ""}
            material={selectedVariant?.material || product.material || ""}
            price={
              selectedVariant
                ? (getVariantPrice(selectedVariant, {
                    currency_code: "USD",
                    tax_code: "full",
                    tax_rate: 0,
                  }) /
                    100) *
                  quantity
                : product?.variants?.length
                ? (getVariantPrice(product?.variants[0], {
                    currency_code: "USD",
                    tax_code: "full",
                    tax_rate: 0,
                  }) /
                    100) *
                  quantity
                : 0
            }
            selectedVariant={selectedVariant?.title}
            tags={product.tags || []}
            title={product.title || ""}
            key={product.id}
          />
          <ProductOptionsForm
            options={product.options || []}
            onSubmit={(values) => {
              onAddToCart(values);
            }}
            onChange={(values) => {
              setSelectedOptions(values.options);
              setQuantity(values.quantity);
            }}
            initialValues={{ quantity: 1 }}
          />
        </div>
      </div>
    </div>
  );
};
