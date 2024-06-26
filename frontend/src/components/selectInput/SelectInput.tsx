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
  isNumeric?: boolean;
  error?: string;
}

export const SelectInput = <RegisterValues extends FieldValues>({
  form,
  attribute,
  isNumeric,
  options,
  label,
  error,
  placeholder,
}: SelectInputProps<RegisterValues>) => {
  return (
    <div className="relative">
      <label
        className="block text-[2vw] mb-[1vw] md:mb-[0.5vw] md:text-[1vw] font-medium text-gray-700"
        htmlFor={attribute}
      >
        {label}
      </label>
      <select
        {...form.register(attribute)}
        className="block w-full px-[1.5vw] md:px-[1vw] py-[0.75vw] md:py-[0.5vw] text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-[2vw] md:text-[1vw]"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={isNumeric ? Number(option.value) : option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 mt-1">{error}</span>}
    </div>
  );
};
