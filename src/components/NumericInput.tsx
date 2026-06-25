import { useState } from "react";

type Props = {
  id: string;
  placeholder: string;
  maxDigits?: number;
  max?: number;
};

export default function NumericInput({
  id,
  placeholder,
  maxDigits = 3,
  max = 999,
}: Props) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (nextValue === "") {
      setValue("");
      return;
    }

    if (nextValue.length > maxDigits) {
      return;
    }

    const numericValue = Number(nextValue);

    if (!Number.isNaN(numericValue) && numericValue >= 0 && numericValue <= max) {
      setValue(nextValue);
    }
  };

  return (
    <input
      id={id}
      placeholder={placeholder}
      type="number"
      inputMode="numeric"
      min="0"
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
}
