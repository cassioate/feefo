import React from "react";
import { render } from "@testing-library/react";
import LetterIcon from "./LetterIcon.jsx";

describe("LetterIcon", () => {
  it("renders without crashing", () => {
    const { container } = render(<LetterIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
