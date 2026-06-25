import { useState } from "react";
import styles from "./AttributeCircle.module.css";

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
    <div className={styles.attribute}>
      <span className={styles.attributeName}>{name}</span>

      <div className={styles.attributeCircle} role="group" aria-label={name}>
        <div className={styles.attributeInner}>
          <input
            type="number"
            className={styles.attributeValue}
            aria-label={`${name} value`}
            placeholder="0"
            inputMode="numeric"
            min="0"
            max="100"
            value={value}
            onChange={handleValueChange}
          />
        </div>
        <div className={styles.attributeModifierWrap}>
          <input
            type="number"
            className={styles.attributeModifier}
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
