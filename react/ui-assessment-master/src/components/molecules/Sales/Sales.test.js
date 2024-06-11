import React from "react";
import { render } from "@testing-library/react";
import Sales from "./Sales.jsx";

describe("Sales", () => {
  it("renders without crashing", () => {
    const { container } = render(<Sales uploads={0} linesSaved={0} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the title and icon correctly", () => {
    const { getByText } = render(<Sales uploads={0} linesSaved={0} />);
    const titleElement = getByText("Sales");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the sales info correctly", () => {
    const { getByText } = render(<Sales uploads={5} linesSaved={10} />);

    expect(getByText(/5 uploads/i)).toBeInTheDocument();
    expect(getByText(/10/i)).toBeInTheDocument();
    expect(getByText(/lines added/i)).toBeInTheDocument();
  });
});
