import React from "react";
import { render } from "@testing-library/react";
import Percentage from "./Percentage.jsx";

describe("Percentage", () => {
  it("renders without crashing", () => {
    const { container } = render(<Percentage firstValue={0} secondValue={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("calculates the percentage correctly", () => {
    const { getByText } = render(
      <Percentage firstValue={2} secondValue={10} />
    );
    expect(getByText("20%")).toBeInTheDocument();
  });

  it("renders the correct percentage value", () => {
    const { getByText } = render(<Percentage firstValue={1} secondValue={3} />);
    expect(getByText("33.33333333333333%")).toBeInTheDocument();
  });
});
