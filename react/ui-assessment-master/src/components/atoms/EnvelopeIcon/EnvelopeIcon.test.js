import React from "react";
import { render } from "@testing-library/react";
import EnvelopeIcon from "./EnvelopeIcon.jsx";

describe("EnvelopeIcon", () => {
  it("renders without crashing", () => {
    const { container } = render(<EnvelopeIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
