import styles from "./SheetBox.module.css";

type Props = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export default function SheetBox({ title, children, className }: Props) {
  return (
    <section className={[styles.box, className].filter(Boolean).join(" ")}>
      <h3>{title}</h3>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
