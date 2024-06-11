import React from "react";
import { render } from "@testing-library/react";
import ContactText from "./ContactText.jsx";

describe("ContactText", () => {
  it("renders without crashing", () => {
    const { container } = render(<ContactText />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders correct text", () => {
    const { getByText } = render(<ContactText />);
    expect(getByText("YOUR FEEFO SUPPORT CONTACT")).toBeInTheDocument();
  });
});
