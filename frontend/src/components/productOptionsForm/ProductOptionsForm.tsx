import { zodResolver } from "@hookform/resolvers/zod";
import { ProductOption } from "@medusajs/medusa";
import { PricedVariant } from "@medusajs/medusa/dist/types/pricing";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const schema = z.object({
  optionId: z.string(),
  variant: z.string(),
  quantity: z
    .number()
    .min(1, "Minimum value is 1")
    .max(1000, "Maximum value is 1000"),
});

import classes from "./ProductOptionsForm.module.scss";
import SelectInput from "../selectInput";
import Input from "../input";

export type ProductFormType = z.infer<typeof schema>;

export interface ProductOptionsFormProps {
  options: ProductOption[];
  variants: PricedVariant[];
  initialValues?: ProductFormType;
  onChange: (values: ProductFormType) => void;
}

export const ProductOptionsForm = ({
  options,
  variants,
  initialValues,
  onChange,
}: ProductOptionsFormProps) => {
  const form = useForm<ProductFormType>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    onChange(form.getValues());
  }, [form.watch()]);

  return (
    <form className={classes.form}>
      <SelectInput
        form={form}
        label="Variant"
        attribute="variant"
        options={variants
          .filter((v) => (v.id && v.title) || v.sku)
          .map((v) => ({
            label: (v.title || v.sku)!, //Test what this is
            value: (v.id || v.sku)!,
          }))}
      />
      <SelectInput
        form={form}
        label="Option"
        attribute="optionId"
        options={options.map((o) => ({
          label: o.title,
          value: o.id,
        }))}
      />
      <Input
        form={form}
        label="Quantity"
        attribute="quantity"
        isNumeric
        error={form.formState.errors.quantity?.message}
      />
      <button type="submit" className={classes.submit}>
        Add to cart
      </button>
    </form>
  );
};
