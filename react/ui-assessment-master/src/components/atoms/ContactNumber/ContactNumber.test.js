import React from "react";
import { render } from "@testing-library/react";
import ContactNumber from "./ContactNumber.jsx";

describe("ContactNumber", () => {
  it("renders without crashing", () => {
    const { container } = render(<ContactNumber>123-456-7890</ContactNumber>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const testText = "123-456-7890";
    const { getByText } = render(<ContactNumber>{testText}</ContactNumber>);
    expect(getByText(testText)).toBeInTheDocument();
  });
});
