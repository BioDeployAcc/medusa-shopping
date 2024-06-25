"use client";

import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface InputProps<RegisterValues extends FieldValues> {
  label: string;
  placeholder?: string;
  attribute: Path<RegisterValues>;
  form: UseFormReturn<RegisterValues>;
  isNumeric?: boolean;
  error?: string;
}

export const Input = <RegisterValues extends FieldValues>({
  label,
  attribute,
  placeholder,
  form,
  error,
  isNumeric = false,
}: InputProps<RegisterValues>) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 mb-1" htmlFor={attribute}>
        {label}
      </label>
      <input
        {...form.register(attribute)}
        className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        type={isNumeric ? "number" : "text"}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};
