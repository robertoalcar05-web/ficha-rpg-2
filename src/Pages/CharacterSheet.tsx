import "./CharacterSheet.css";
import SheetBox from "../components/SheetBox";
import AttributeCircle from "../components/AttributeCircle";
import NumericInput from "../components/NumericInput";

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
          <div className="attributes-grid">
            <AttributeCircle name="Strength" />
            <AttributeCircle name="Dexterity" />
            <AttributeCircle name="Constitution" />
            <AttributeCircle name="Intelligence" />
            <AttributeCircle name="Wisdom" />
            <AttributeCircle name="Charisma" />
          </div>
        </SheetBox>
      </div>

      <div className="info">
        <SheetBox title="Character Info">
          <div className="sheet-form-grid">
            <div className="sheet-field">
              <label htmlFor="character-name">Name</label>
              <input id="character-name" placeholder="Nome do personagem" maxLength={30} />
            </div>
            <div className="sheet-field">
              <label htmlFor="character-class">Class</label>
              <input id="character-class" placeholder="Classe" maxLength={30} />
            </div>
            <div className="sheet-field">
              <label htmlFor="character-age">Age</label>
              <input id="character-age" placeholder="Idade" maxLength={30} />
            </div>
            <div className="sheet-field">
              <label htmlFor="character-race">Race</label>
              <input id="character-race" placeholder="Raça" maxLength={30} />
            </div>
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="character-background">Background</label>
              <textarea id="character-background" placeholder="Descreva sua história" maxLength={30} />
            </div>
          </div>
        </SheetBox>
      </div>

      <div className="combat">
        <SheetBox title="Combat">
          <div className="sheet-form-grid">
            <div className="sheet-field">
              <label htmlFor="combat-hp">HP</label>
              <NumericInput id="combat-hp" placeholder="Pontos de vida" />
            </div>
            <div className="sheet-field">
              <label htmlFor="combat-ac">AC</label>
              <NumericInput id="combat-ac" placeholder="Classe de armadura" />
            </div>
            <div className="sheet-field">
              <label htmlFor="combat-initiative">Initiative</label>
              <NumericInput id="combat-initiative" placeholder="Iniciativa" />
            </div>
            <div className="sheet-field">
              <label htmlFor="combat-speed">Speed</label>
              <NumericInput id="combat-speed" placeholder="Velocidade" />
            </div>
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="combat-weapons">Weapons & Attacks</label>
              <textarea id="combat-weapons" placeholder="Liste armas e ataques" maxLength={30} />
            </div>
          </div>
        </SheetBox>
      </div>

      <div className="personality">
        <SheetBox title="Personality">
          <div className="sheet-form-grid">
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="personality-traits">Traits</label>
              <textarea id="personality-traits" placeholder="Traços de personalidade" maxLength={30} />
            </div>
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="personality-ideals">Ideals</label>
              <textarea id="personality-ideals" placeholder="Ideais" maxLength={30} />
            </div>
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="personality-bonds">Bonds</label>
              <textarea id="personality-bonds" placeholder="Vínculos" maxLength={30} />
            </div>
          </div>
        </SheetBox>
      </div>

      <div className="skills">
        <SheetBox title="Skills">
          <div className="sheet-form-grid">
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="skills-list">Skills & Proficiencies</label>
              <textarea id="skills-list" placeholder="Liste suas habilidades" maxLength={30} />
            </div>
          </div>
        </SheetBox>
      </div>

      <div className="features">
        <SheetBox title="Features & Traits">
          <div className="sheet-form-grid">
            <div className="sheet-field sheet-field-wide">
              <label htmlFor="features-notes">Features</label>
              <textarea id="features-notes" placeholder="Anote características especiais" maxLength={30} />
            </div>
          </div>
        </SheetBox>
      </div>
    </main>
  );
}