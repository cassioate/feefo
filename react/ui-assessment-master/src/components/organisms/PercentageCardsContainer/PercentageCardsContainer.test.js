import React from "react";
import { render } from "@testing-library/react";
import PercentageCardsContainer from "./PercentageCardsContainer.jsx";

describe("PercentageCardsContainer", () => {
  it("renders without crashing", () => {
    const { container } = render(<PercentageCardsContainer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByTestId } = render(
      <PercentageCardsContainer>
        <div data-testid="child-element">Child Element</div>
      </PercentageCardsContainer>
    );

    expect(getByTestId("child-element")).toBeInTheDocument();
  });
});
