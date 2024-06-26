"use client";

import ProductImages from "../productImages";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import { ProductInfo } from "../productInfo/ProductInfo";
import { useEffect, useState } from "react";
import { getVariantPrice } from "medusa-react";
import ProductOptionsForm from "../productOptionsForm";
import { FieldValues } from "react-hook-form";

export interface SingleProductViewProps {
  product: PricedProduct;
}

export const SingleProductView = ({ product }: SingleProductViewProps) => {
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = (values: FieldValues) => {
    console.log(values);
  };

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.length ? product.variants[0] : undefined
  );

  useEffect(() => {
    console.log(selectedVariant);
  }, [selectedVariant]);

  const selectVariant = (selectedOptions: FieldValues) => {
    const selected = product?.variants?.find((variant) => {
      return variant?.options?.every((option) => {
        return selectedOptions[option.option_id] === option.value;
      });
    });
    selected && setSelectedVariant(selected);
  };

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row w-screen p-[4vw] md:p-[2vw] md:px-[4vw] bg-white justify-center md:justify-between">
      <div className="md:w-1/2">
        <ProductImages
          images={product.images?.map((image) => image.url) || []}
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col">
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
              selectVariant(values.options);
              setQuantity(values.quantity);
            }}
            initialValues={{ quantity: 1 }}
          />
        </div>
      </div>
    </div>
  );
};
