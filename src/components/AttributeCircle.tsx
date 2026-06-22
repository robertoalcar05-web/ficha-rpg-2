import "./AttributeCircle.css";

type Props = {
  name: string;
};

export default function AttributeCircle({ name }: Props) {
  return (
    <div className="attribute">
      <span className="attribute-name">
        {name}
      </span>

      <div className="attribute-circle">
        <div className="attribute-inner" />
        <div className="attribute-modifier" />
      </div>
    </div>
  );
}