import React from "react";
import { Checkbox } from "../ui/checkbox";

export interface FilterChecboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="h-6 w-6 rounded-[8px]"
        id={`checkbox-${name}-${value}`}
      />
      <label
        htmlFor={`checkbox-${name}-${value}`}
        className="flex-1 cursor-pointer leading-none"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
