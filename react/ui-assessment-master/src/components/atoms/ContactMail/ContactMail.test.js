import React from "react";
import { render } from "@testing-library/react";
import ContactMail from "./ContactMail.jsx";

describe("ContactMail", () => {
  it("renders without crashing", () => {
    const { container } = render(<ContactMail>test@test.com</ContactMail>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const testText = "test@test.com";
    const { getByText } = render(<ContactMail>{testText}</ContactMail>);
    expect(getByText(testText)).toBeInTheDocument();
  });
});
