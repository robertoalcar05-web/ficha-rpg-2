import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SheetBox from "./SheetBox";
import styles from "./SheetBox.module.css";

describe("SheetBox", () => {
  it("renders title as heading level 3", () => {
    render(<SheetBox title="Combat" />);

    expect(screen.getByRole("heading", { level: 3, name: "Combat" })).toBeInTheDocument();
  });

  it("renders children inside the box", () => {
    render(
      <SheetBox title="Skills">
        <p>Proficiency list</p>
      </SheetBox>,
    );

    expect(screen.getByText("Proficiency list")).toBeInTheDocument();
  });

  it("omits heading when title is not provided", () => {
    render(
      <SheetBox>
        <span>Header content</span>
      </SheetBox>,
    );

    expect(screen.queryByRole("heading", { level: 3 })).not.toBeInTheDocument();
    expect(screen.getByText("Header content")).toBeInTheDocument();
  });

  it("merges custom className with module class", () => {
    render(
      <SheetBox title="Attributes" className="custom-box">
        <span>Content</span>
      </SheetBox>,
    );

    const section = screen.getByRole("heading", { name: "Attributes" }).closest("section");

    expect(section).toHaveClass("custom-box");
    expect(section).toHaveClass(styles.box);
    expect(section?.className).not.toBe("custom-box");
  });

  describe("default variant", () => {
    it("does not apply terminal class or CRT overlay", () => {
      const { container } = render(
        <SheetBox title="Features">
          <span>Default content</span>
        </SheetBox>,
      );

      const section = screen.getByRole("heading", { name: "Features" }).closest("section");

      expect(section).toHaveClass(styles.box);
      expect(section).not.toHaveClass(styles.terminal);
      expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
    });
  });

  describe("terminal variant", () => {
    it("applies terminal class and renders CRT overlay", () => {
      render(
        <SheetBox title="Combat" variant="terminal">
          <span>Terminal content</span>
        </SheetBox>,
      );

      const section = screen.getByRole("heading", { name: "Combat" }).closest("section");
      const overlay = section?.querySelector('[aria-hidden="true"]');

      expect(section).toHaveClass(styles.terminal);
      expect(overlay).toBeInTheDocument();
      expect(overlay).toHaveClass(styles.crtOverlay);
    });

    it("keeps title and children accessible inside terminal box", () => {
      render(
        <SheetBox title="Skills" variant="terminal">
          <span>Terminal content</span>
        </SheetBox>,
      );

      expect(screen.getByRole("heading", { level: 3, name: "Skills" })).toBeInTheDocument();
      expect(screen.getByText("Terminal content")).toBeInTheDocument();
    });
  });
});
