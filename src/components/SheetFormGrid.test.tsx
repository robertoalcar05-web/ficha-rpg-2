import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SheetFormGrid from "./SheetFormGrid";
import styles from "./SheetFormGrid.module.css";

describe("SheetFormGrid", () => {
  it("renders children inside the grid container", () => {
    const { container } = render(
      <SheetFormGrid>
        <input aria-label="Field A" />
        <input aria-label="Field B" />
      </SheetFormGrid>,
    );

    expect(screen.getByLabelText("Field A")).toBeInTheDocument();
    expect(screen.getByLabelText("Field B")).toBeInTheDocument();
    expect(container.firstElementChild).toHaveClass(styles.formGrid);
  });
});
