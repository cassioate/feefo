import React from "react";
import { render } from "@testing-library/react";
import SalesInfo from "./SalesInfo.jsx";

describe("SalesInfo", () => {
  it("renders without crashing", () => {
    const { container } = render(<SalesInfo uploads={0} linesSaved={0} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the correct number of uploads and lines saved", () => {
    const { getByText } = render(<SalesInfo uploads={5} linesSaved={10} />);
    expect(getByText(/5 uploads/i)).toBeInTheDocument();
    expect(getByText(/10/i)).toBeInTheDocument();
    expect(getByText(/lines added/i)).toBeInTheDocument();
  });
});
