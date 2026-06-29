import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LicenseHeader from "./LicenseHeader";
import styles from "./LicenseHeader.module.css";

describe("LicenseHeader", () => {
  it("renders primary headings for the citizen license", () => {
    render(<LicenseHeader />);

    expect(screen.getByRole("heading", { level: 1, name: "NIGHT CITY" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "CITIZEN LICENSE" })).toBeInTheDocument();
  });

  it("renders license metadata and footer labels", () => {
    render(<LicenseHeader />);

    expect(screen.getByText("NC-PDL-2077")).toBeInTheDocument();
    expect(screen.getByText("STATUS: ACTIVE")).toBeInTheDocument();
    expect(screen.getByText("NCPD AUTHORIZED")).toBeInTheDocument();
  });

  it("configures glitch title with data-text for CSS layers", () => {
    render(<LicenseHeader />);

    const title = screen.getByRole("heading", { level: 1, name: "NIGHT CITY" });

    expect(title).toHaveAttribute("data-text", "NIGHT CITY");
    expect(title).toHaveClass(styles.glitchTitle);
  });

  it("marks decorative elements as aria-hidden", () => {
    const { container } = render(<LicenseHeader />);

    const hiddenElements = container.querySelectorAll('[aria-hidden="true"]');

    expect(hiddenElements.length).toBeGreaterThan(0);
  });
});
