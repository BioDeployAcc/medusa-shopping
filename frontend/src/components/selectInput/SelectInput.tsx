import { FieldValues, Path, UseFormReturn } from "react-hook-form";

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
    <div className="relative">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor={attribute}
      >
        {label}
      </label>
      <select
        {...form.register(attribute)}
        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
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
