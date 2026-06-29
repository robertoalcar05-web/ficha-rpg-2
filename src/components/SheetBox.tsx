import styles from "./SheetBox.module.css";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "terminal";
};

export default function SheetBox({
  title,
  children,
  className,
  variant = "default",
}: Props) {
  const isTerminal = variant === "terminal";

  return (
    <section
      className={[
        styles.box,
        isTerminal && styles.terminal,
        className,
      ].filter(Boolean).join(" ")}
    >
      {isTerminal ? <div className={styles.crtOverlay} aria-hidden="true" /> : null}
      {title ? <h3>{title}</h3> : null}

      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
