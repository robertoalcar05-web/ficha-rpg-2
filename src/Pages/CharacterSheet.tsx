import styles from "./CharacterSheet.module.css";
import SheetBox from "../components/SheetBox";
import AttributeCircle from "../components/AttributeCircle";
import NumericInput from "../components/NumericInput";
import SheetFormGrid from "../components/SheetFormGrid";
import SheetField from "../components/SheetField";

export default function CharacterSheet() {
  return (
    <main className={`${styles.sheet} sheet`}>
      <div className={styles.header}>
        <SheetBox title="Citizen License" className={styles.headerBox}>
          <div className={styles.licenseHeader}>
            <h1>NIGHT CITY</h1>
            <h2>CITIZEN LICENSE</h2>
          </div>
        </SheetBox>
      </div>

      <div className={styles.attributes}>
        <SheetBox title="Attributes" className={styles.attributesBox}>
          <div className={styles.attributesGrid}>
            <AttributeCircle name="Strength" />
            <AttributeCircle name="Dexterity" />
            <AttributeCircle name="Constitution" />
            <AttributeCircle name="Intelligence" />
            <AttributeCircle name="Wisdom" />
            <AttributeCircle name="Charisma" />
          </div>
        </SheetBox>
      </div>

      <div className={styles.info}>
        <SheetBox title="Character Info" className={styles.infoBox}>
          <SheetFormGrid>
            <SheetField label="Name" htmlFor="character-name">
              <input id="character-name" placeholder="Nome do personagem" maxLength={30} />
            </SheetField>
            <SheetField label="Class" htmlFor="character-class">
              <input id="character-class" placeholder="Classe" maxLength={30} />
            </SheetField>
            <SheetField label="Age" htmlFor="character-age">
              <input id="character-age" placeholder="Idade" maxLength={30} />
            </SheetField>
            <SheetField label="Race" htmlFor="character-race">
              <input id="character-race" placeholder="Raça" maxLength={30} />
            </SheetField>
            <SheetField label="Background" htmlFor="character-background" wide>
              <textarea id="character-background" placeholder="Descreva sua história" maxLength={30} />
            </SheetField>
          </SheetFormGrid>
        </SheetBox>
      </div>

      <div className={styles.combat}>
        <SheetBox title="Combat" className={styles.combatBox}>
          <SheetFormGrid>
            <SheetField label="HP" htmlFor="combat-hp">
              <NumericInput id="combat-hp" placeholder="Pontos de vida" />
            </SheetField>
            <SheetField label="AC" htmlFor="combat-ac">
              <NumericInput id="combat-ac" placeholder="Classe de armadura" />
            </SheetField>
            <SheetField label="Initiative" htmlFor="combat-initiative">
              <NumericInput id="combat-initiative" placeholder="Iniciativa" />
            </SheetField>
            <SheetField label="Speed" htmlFor="combat-speed">
              <NumericInput id="combat-speed" placeholder="Velocidade" />
            </SheetField>
            <SheetField label="Weapons & Attacks" htmlFor="combat-weapons" wide>
              <textarea id="combat-weapons" placeholder="Liste armas e ataques" maxLength={30} />
            </SheetField>
          </SheetFormGrid>
        </SheetBox>
      </div>

      <div className={styles.personality}>
        <SheetBox title="Personality" className={styles.personalityBox}>
          <SheetFormGrid>
            <SheetField label="Traits" htmlFor="personality-traits" wide>
              <textarea id="personality-traits" placeholder="Traços de personalidade" maxLength={30} />
            </SheetField>
            <SheetField label="Ideals" htmlFor="personality-ideals" wide>
              <textarea id="personality-ideals" placeholder="Ideais" maxLength={30} />
            </SheetField>
            <SheetField label="Bonds" htmlFor="personality-bonds" wide>
              <textarea id="personality-bonds" placeholder="Vínculos" maxLength={30} />
            </SheetField>
          </SheetFormGrid>
        </SheetBox>
      </div>

      <div className={styles.skills}>
        <SheetBox title="Skills" className={styles.skillsBox}>
          <SheetFormGrid>
            <SheetField label="Skills & Proficiencies" htmlFor="skills-list" wide>
              <textarea id="skills-list" placeholder="Liste suas habilidades" maxLength={30} />
            </SheetField>
          </SheetFormGrid>
        </SheetBox>
      </div>

      <div className={styles.features}>
        <SheetBox title="Features & Traits" className={styles.featuresBox}>
          <SheetFormGrid>
            <SheetField label="Features" htmlFor="features-notes" wide>
              <textarea id="features-notes" placeholder="Anote características especiais" maxLength={30} />
            </SheetField>
          </SheetFormGrid>
        </SheetBox>
      </div>
    </main>
  );
}
