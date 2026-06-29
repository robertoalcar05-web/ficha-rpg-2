import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import NumericInput from "./NumericInput";

describe("NumericInput", () => {
  it("renders with id and placeholder", () => {
    render(<NumericInput id="combat-hp" placeholder="Pontos de vida" />);

    const input = screen.getByPlaceholderText("Pontos de vida");

    expect(input).toHaveAttribute("id", "combat-hp");
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("inputMode", "numeric");
  });

  it("accepts valid numeric input", async () => {
    const user = userEvent.setup();

    render(<NumericInput id="combat-hp" placeholder="HP" />);

    const input = screen.getByPlaceholderText("HP");

    await user.type(input, "42");

    expect(input).toHaveValue(42);
  });

  it("allows clearing the field", async () => {
    const user = userEvent.setup();

    render(<NumericInput id="combat-hp" placeholder="HP" />);

    const input = screen.getByPlaceholderText("HP");

    await user.type(input, "10");
    await user.clear(input);

    expect(input).toHaveValue(null);
  });

  it("rejects values above max", async () => {
    const user = userEvent.setup();

    render(<NumericInput id="combat-hp" placeholder="HP" max={99} />);

    const input = screen.getByPlaceholderText("HP");

    await user.type(input, "100");

    expect(input).toHaveValue(10);
  });

  it("rejects input exceeding maxDigits", async () => {
    const user = userEvent.setup();

    render(<NumericInput id="combat-hp" placeholder="HP" maxDigits={2} max={999} />);

    const input = screen.getByPlaceholderText("HP");

    await user.type(input, "123");

    expect(input).toHaveValue(12);
  });

  it("respects custom max attribute on the element", () => {
    render(<NumericInput id="combat-ac" placeholder="AC" max={30} />);

    expect(screen.getByPlaceholderText("AC")).toHaveAttribute("max", "30");
  });
});
