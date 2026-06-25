import styles from "./SheetFormGrid.module.css";

type Props = {
  children: React.ReactNode;
};

export default function SheetFormGrid({ children }: Props) {
  return <div className={styles.formGrid}>{children}</div>;
}
