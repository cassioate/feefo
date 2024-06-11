import React from "react";
import { render } from "@testing-library/react";
import InfoContainer from "./InfoContainer.jsx";

describe("InfoContainer", () => {
  it("renders without crashing", () => {
    const { container } = render(<InfoContainer />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders children correctly", () => {
    const { getByTestId } = render(
      <InfoContainer>
        <div data-testid="child-element">Child Element</div>
      </InfoContainer>
    );

    expect(getByTestId("child-element")).toBeInTheDocument();
  });
});
