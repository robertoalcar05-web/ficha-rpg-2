import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CharacterSheet from "./CharacterSheet";
import sheetBoxStyles from "../components/SheetBox.module.css";
import sheetStyles from "./CharacterSheet.module.css";

const TERMINAL_SECTION_TITLES = [
  "Attributes",
  "Character Info",
  "Combat",
  "Personality",
  "Skills",
  "Features & Traits",
] as const;

describe("CharacterSheet", () => {
  it("renders the main sheet with global hook and module layout class", () => {
    render(<CharacterSheet />);

    const main = screen.getByRole("main");

    expect(main).toHaveClass("sheet");
    expect(main).toHaveClass(sheetStyles.sheet);
  });

  it("renders license header without duplicate citizen license heading", () => {
    render(<CharacterSheet />);

    expect(screen.getByRole("heading", { level: 1, name: "NIGHT CITY" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "CITIZEN LICENSE" })).toBeInTheDocument();
    expect(screen.getByText("NC-PDL-2077")).toBeInTheDocument();
    expect(screen.getByText("NCPD AUTHORIZED")).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3, name: "Citizen License" })).not.toBeInTheDocument();
  });

  it("renders all gameplay section titles", () => {
    render(<CharacterSheet />);

    for (const title of TERMINAL_SECTION_TITLES) {
      expect(screen.getByRole("heading", { level: 3, name: title })).toBeInTheDocument();
    }
  });

  it("applies terminal variant to all gameplay sections", () => {
    render(<CharacterSheet />);

    for (const title of TERMINAL_SECTION_TITLES) {
      const section = screen.getByRole("heading", { level: 3, name: title }).closest("section");

      expect(section).toHaveClass(sheetBoxStyles.terminal);
    }
  });

  it("keeps header section on cyberpunk license variant without terminal class", () => {
    render(<CharacterSheet />);

    const headerSection = screen.getByRole("heading", { level: 1, name: "NIGHT CITY" }).closest("section");

    expect(headerSection).toHaveClass(sheetStyles.headerBox);
    expect(headerSection).not.toHaveClass(sheetBoxStyles.terminal);
  });

  it("renders all six attribute circles", () => {
    render(<CharacterSheet />);

    const attributes = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

    for (const name of attributes) {
      expect(screen.getByLabelText(`${name} value`)).toBeInTheDocument();
      expect(screen.getByLabelText(`${name} modifier`)).toBeInTheDocument();
    }
  });

  it("renders character and combat form fields", () => {
    render(<CharacterSheet />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Background")).toBeInTheDocument();
    expect(screen.getByLabelText("HP")).toBeInTheDocument();
    expect(screen.getByLabelText("Weapons & Attacks")).toBeInTheDocument();
    expect(screen.getByLabelText("Traits")).toBeInTheDocument();
    expect(screen.getByLabelText("Skills & Proficiencies")).toBeInTheDocument();
    expect(screen.getByLabelText("Features")).toBeInTheDocument();
  });
});
