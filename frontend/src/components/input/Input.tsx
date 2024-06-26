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
      <label
        className="font-medium text-[2vw] mb-[1vw] md:mb-[0.5vw] text-gray-700 md:text-[1vw]"
        htmlFor={attribute}
      >
        {label}
      </label>
      <input
        {...form.register(attribute)}
        className="block w-full px-[1.5vw] md:px-[1vw] py-[0.75vw] md:py-[0.5vw] text-gray-700 
        bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-[2vw] md:text-[1vw]"
        type={isNumeric ? "number" : "text"}
        min={isNumeric ? 1 : undefined}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};
