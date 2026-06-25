import styles from "./SheetField.module.css";

type Props = {
  label: string;
  htmlFor: string;
  wide?: boolean;
  children: React.ReactNode;
};

export default function SheetField({ label, htmlFor, wide, children }: Props) {
  return (
    <div className={[styles.field, wide && styles.fieldWide].filter(Boolean).join(" ")}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
}
