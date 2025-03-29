import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /why zod\?/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    const description = screen.getByText(/zod를 사용한 타입 검증 예제/i);
    expect(description).toBeInTheDocument();
  });
});
