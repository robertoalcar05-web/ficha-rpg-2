import "./CharacterSheet.css";
import SheetBox from "../components/SheetBox";
import AttributeCircle from "../components/AttributeCircle";

export default function CharacterSheet() {
  return (
    <main className="sheet">

      <div className="header">
        <SheetBox title="Citizen License">

  <div className="license-header">

    <h1>NIGHT CITY</h1>

    <h2>CITIZEN LICENSE</h2>

  </div>

</SheetBox>
      </div>

      <div className="attributes">
        <SheetBox title="Attributes">

  <AttributeCircle name="Strength" />

  <AttributeCircle name="Dexterity" />

  <AttributeCircle name="Constitution" />

  <AttributeCircle name="Intelligence" />

  <AttributeCircle name="Wisdom" />

  <AttributeCircle name="Charisma" />

</SheetBox>
      </div>

      <div className="info">
        <SheetBox title="Character Info" />
      </div>

      <div className="combat">
        <SheetBox title="Combat" />
      </div>

      <div className="personality">
        <SheetBox title="Personality" />
      </div>

      <div className="skills">
        <SheetBox title="Skills" />
      </div>

      <div className="features">
        <SheetBox title="Features & Traits" />
      </div>

    </main>
  );
}