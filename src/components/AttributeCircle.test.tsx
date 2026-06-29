import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import AttributeCircle from "./AttributeCircle";
import SheetBox from "./SheetBox";
import sheetBoxStyles from "./SheetBox.module.css";

describe("AttributeCircle", () => {
  it("renders attribute name and accessible inputs", () => {
    render(<AttributeCircle name="Strength" />);

    expect(screen.getByText("Strength")).toBeInTheDocument();
    expect(screen.getByLabelText("Strength value")).toBeInTheDocument();
    expect(screen.getByLabelText("Strength modifier")).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Strength" })).toBeInTheDocument();
  });

  it("accepts attribute values from 0 to 100", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Dexterity" />);

    const valueInput = screen.getByLabelText("Dexterity value");

    await user.type(valueInput, "100");

    expect(valueInput).toHaveValue(100);
  });

  it("rejects attribute values above 100", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Dexterity" />);

    const valueInput = screen.getByLabelText("Dexterity value");

    await user.type(valueInput, "101");

    expect(valueInput).toHaveValue(10);
  });

  it("rejects attribute values with more than 3 digits", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Dexterity" />);

    const valueInput = screen.getByLabelText("Dexterity value");

    await user.type(valueInput, "1000");

    expect(valueInput).toHaveValue(100);
  });

  it("allows clearing the attribute value", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Wisdom" />);

    const valueInput = screen.getByLabelText("Wisdom value");

    await user.type(valueInput, "15");
    await user.clear(valueInput);

    expect(valueInput).toHaveValue(null);
  });

  it("accepts modifier values from -10 to 10", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Charisma" />);

    const modifierInput = screen.getByLabelText("Charisma modifier");

    await user.type(modifierInput, "-5");

    expect(modifierInput).toHaveValue(-5);

    await user.clear(modifierInput);
    await user.type(modifierInput, "10");

    expect(modifierInput).toHaveValue(10);
  });

  it("rejects modifier values outside -10 to 10", async () => {
    const user = userEvent.setup();

    render(<AttributeCircle name="Constitution" />);

    const modifierInput = screen.getByLabelText("Constitution modifier");

    await user.type(modifierInput, "11");

    expect(modifierInput).toHaveValue(1);
  });

  it("remains interactive inside terminal SheetBox", async () => {
    const user = userEvent.setup();

    render(
      <SheetBox title="Attributes" variant="terminal">
        <AttributeCircle name="Strength" />
      </SheetBox>,
    );

    const section = screen.getByRole("heading", { name: "Attributes" }).closest("section");
    const valueInput = screen.getByLabelText("Strength value");

    expect(section).toHaveClass(sheetBoxStyles.terminal);
    await user.type(valueInput, "18");
    expect(valueInput).toHaveValue(18);
  });
});
