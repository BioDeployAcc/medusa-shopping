import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import classes from "./SelectInput.module.scss";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectInputProps<RegisterValues extends FieldValues> {
  form: UseFormReturn<RegisterValues>;
  attribute: Path<RegisterValues>;
  options: SelectOption[];
  label: string;
  placeholder?: string;
}

export const SelectInput = <RegisterValues extends FieldValues>({
  form,
  attribute,
  options,
  label,
  placeholder,
}: SelectInputProps<RegisterValues>) => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={attribute}>
        {label}
      </label>
      <select {...form.register(attribute)} className={classes.select}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
