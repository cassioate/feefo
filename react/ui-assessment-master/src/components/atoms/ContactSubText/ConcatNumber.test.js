import React from "react";
import { render } from "@testing-library/react";
import ContactSubText from "./ContactSubText.jsx";

describe("ContactSubText", () => {
  it("renders without crashing", () => {
    const { container } = render(<ContactSubText>Support</ContactSubText>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const testText = "Support";
    const { getByText } = render(<ContactSubText>{testText}</ContactSubText>);
    expect(getByText(testText)).toBeInTheDocument();
  });
});
