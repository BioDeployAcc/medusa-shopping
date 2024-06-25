"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ProductOption, ProductOptionValue } from "@medusajs/medusa";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import classes from "./ProductOptionsForm.module.scss";
import SelectInput from "../selectInput";
import Input from "../input";

export interface ProductOptionsFormProps {
  options: ProductOption[];
  initialValues?: FieldValues;
  onChange: (values: FieldValues) => void;
  onSubmit: (values: FieldValues) => void;
}

export const ProductOptionsForm = ({
  options,
  initialValues,
  onSubmit,
  onChange,
}: ProductOptionsFormProps) => {
  const schema = z.object({
    ...options.reduce((acc, option) => {
      return {
        ...acc,
        [`options.${option.id}`]: z.string(),
      };
    }, {}),
    quantity: z
      .number()
      .min(1, "Minimum value is 1")
      .max(1000, "Maximum value is 1000"),
  });

  const form = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    onChange(form.getValues());
  }, [{ ...form.watch() }]);

  return (
    <form
      className={classes.form}
      onSubmit={form.handleSubmit((values) => onSubmit(values))}
    >
      {options.map((option) => {
        return (
          <SelectInput
            key={option.id}
            form={form}
            label={option.title}
            attribute={`options.${option.id}`}
            placeholder={`Select ${option.title}`}
            options={option.values
              .filter(
                (
                  value: ProductOptionValue,
                  index: number,
                  self: ProductOptionValue[]
                ) => {
                  return (
                    self.findIndex(
                      (v: ProductOptionValue) => v.value === value.value
                    ) === index
                  );
                }
              )
              .map((value: ProductOptionValue) => ({
                label: value.value,
                value: value.value,
              }))}
          />
        );
      })}
      <Input
        form={form}
        label="Quantity"
        attribute="quantity"
        isNumeric
        error={form.formState.errors.quantity?.message?.toString()}
      />
      <button type="submit" className={classes.submit}>
        Add to cart
      </button>
    </form>
  );
};
