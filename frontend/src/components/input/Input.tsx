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
        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        type={isNumeric ? "number" : "text"}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};
