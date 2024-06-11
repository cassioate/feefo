import React from "react";
import { render } from "@testing-library/react";
import PercentageCard from "./PercentageCard.jsx";

describe("PercentageCard", () => {
  it("renders without crashing", () => {
    const { container } = render(<PercentageCard />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("displays the correct message", () => {
    const message = "Test Message";
    const { getByText } = render(<PercentageCard message={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });

  it("displays the correct percentage", () => {
    const firstValue = 30;
    const secondValue = 100;
    const { getByText } = render(
      <PercentageCard firstValue={firstValue} secondValue={secondValue} />
    );
    expect(getByText("30%")).toBeInTheDocument();
  });

  it("applies border left style when isBorderLeft is true", () => {
    const { container } = render(<PercentageCard isBorderLeft />);
    const percentageCard = container.firstChild;
    expect(percentageCard).toHaveStyle("border-left: 1px solid #ccc");
  });

  it("applies border right style when isBorderRight is true", () => {
    const { container } = render(<PercentageCard isBorderRight />);
    const percentageCard = container.firstChild;
    expect(percentageCard).toHaveStyle("border-right: 1px solid #ccc");
  });
});
