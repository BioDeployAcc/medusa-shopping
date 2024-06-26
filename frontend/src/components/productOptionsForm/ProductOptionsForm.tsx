"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ProductOption, ProductOptionValue } from "@medusajs/medusa";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

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
  const form = useForm<FieldValues>({
    defaultValues: initialValues,
  });

  useEffect(() => {
    onChange(form.getValues());
    console.log(form.getValues());
  }, [...Object.entries(form.watch())]);

  return (
    <div className="container mx-auto w-full flex">
      <form
        className="mx-auto flex flex-col w-full gap-y-[2vw] md:gap-y-[1vw]"
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
        <Input form={form} label="Quantity" attribute="quantity" isNumeric />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-[2vw] md:p-[1vw] rounded-[0.4vw]"
        >
          Add to cart
        </button>
      </form>
    </div>
  );
};
