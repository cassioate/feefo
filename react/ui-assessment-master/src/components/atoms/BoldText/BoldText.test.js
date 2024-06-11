import React from "react";
import { render } from "@testing-library/react";
import BoldText from "./BoldText.jsx";

describe("BoldText", () => {
  it("renders without crashing", () => {
    const { container } = render(<BoldText>Test Text</BoldText>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByText } = render(<BoldText>Test Text</BoldText>);
    expect(getByText("Test Text")).toBeInTheDocument();
  });
});
