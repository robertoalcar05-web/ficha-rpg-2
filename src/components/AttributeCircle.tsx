import { useState } from "react";
import "./AttributeCircle.css";

type Props = {
  name: string;
};

export default function AttributeCircle({ name }: Props) {
  const [value, setValue] = useState("");
  const [modifier, setModifier] = useState("");

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (nextValue === "") {
      setValue("");
      return;
    }

    if (nextValue.length > 3) {
      return;
    }

    const numericValue = Number(nextValue);

    if (!Number.isNaN(numericValue) && numericValue <= 100) {
      setValue(nextValue);
    }
  };

  const handleModifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (nextValue === "" || nextValue === "+" || nextValue === "-") {
      setModifier(nextValue);
      return;
    }

    if (nextValue.length > 3) {
      return;
    }

    const numericValue = Number(nextValue);

    if (!Number.isNaN(numericValue) && numericValue >= -10 && numericValue <= 10) {
      setModifier(nextValue);
    }
  };

  return (
    <div className="attribute">
      <span className="attribute-name">{name}</span>

      <div className="attribute-circle" role="group" aria-label={name}>
        <div className="attribute-inner">
          <input
            type="number"
            className="attribute-value"
            aria-label={`${name} value`}
            placeholder="0"
            inputMode="numeric"
            min="0"
            max="100"
            value={value}
            onChange={handleValueChange}
          />
        </div>
        <div className="attribute-modifier-wrap">
          <input
            type="number"
            className="attribute-modifier"
            aria-label={`${name} modifier`}
            placeholder="+0"
            inputMode="numeric"
            min="-10"
            max="10"
            value={modifier}
            onChange={handleModifierChange}
          />
        </div>
      </div>
    </div>
  );
}