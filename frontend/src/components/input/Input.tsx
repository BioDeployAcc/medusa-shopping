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

import classes from "./Input.module.scss";

export const Input = <RegisterValues extends FieldValues>({
  label,
  attribute,
  placeholder,
  form,
  error,
  isNumeric = false,
}: InputProps<RegisterValues>) => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={attribute}>
        {label}
      </label>
      <input
        {...form.register(attribute)}
        className={classes.input}
        type={isNumeric ? "number" : "text"}
        placeholder={placeholder}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};
