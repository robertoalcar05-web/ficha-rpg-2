import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SheetField from "./SheetField";
import styles from "./SheetField.module.css";
import SheetBox from "./SheetBox";

describe("SheetField", () => {
  it("associates label with the form control", () => {
    render(
      <SheetField label="Name" htmlFor="character-name">
        <input id="character-name" />
      </SheetField>,
    );

    const label = screen.getByText("Name");
    const input = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "character-name");
    expect(input).toHaveAttribute("id", "character-name");
  });

  it("renders children inside the field wrapper", () => {
    render(
      <SheetField label="HP" htmlFor="combat-hp">
        <input id="combat-hp" type="number" />
      </SheetField>,
    );

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("applies wide modifier class when wide is true", () => {
    const { container } = render(
      <SheetField label="Background" htmlFor="character-background" wide>
        <textarea id="character-background" />
      </SheetField>,
    );

    const field = container.firstElementChild;

    expect(field).toHaveClass(styles.field);
    expect(field).toHaveClass(styles.fieldWide);
  });

  it("does not apply wide modifier class by default", () => {
    const { container } = render(
      <SheetField label="Class" htmlFor="character-class">
        <input id="character-class" />
      </SheetField>,
    );

    const field = container.firstElementChild;

    expect(field).toHaveClass(styles.field);
    expect(field).not.toHaveClass(styles.fieldWide);
  });

  it("remains accessible when nested inside terminal SheetBox", () => {
    render(
      <SheetBox title="Combat" variant="terminal">
        <SheetField label="HP" htmlFor="combat-hp">
          <input id="combat-hp" placeholder="Pontos de vida" />
        </SheetField>
      </SheetBox>,
    );

    expect(screen.getByRole("heading", { level: 3, name: "Combat" })).toBeInTheDocument();
    expect(screen.getByLabelText("HP")).toHaveAttribute("id", "combat-hp");
    expect(screen.getByPlaceholderText("Pontos de vida")).toBeInTheDocument();
  });
});
