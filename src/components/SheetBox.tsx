import "./SheetBox.css";

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function SheetBox({ title, children }: Props) {
  return (
    <section className="sheet-box">
      <h3>{title}</h3>

      <div className="sheet-content">
        {children}
      </div>
    </section>
  );
}