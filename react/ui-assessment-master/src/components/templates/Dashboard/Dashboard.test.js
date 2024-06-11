import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard.jsx";

describe("Dashboard", () => {
  it("renders sales and percentage cards correctly", () => {
    const salesOverview = {
      successfulUploads: 50,
      uploads: 100,
      linesAttempted: 500,
      linesSaved: 200,
    };
    const { getByText } = render(<Dashboard salesOverview={salesOverview} />);

    expect(getByText("Sales")).toBeInTheDocument();
    expect(getByText(/uploads/i)).toBeInTheDocument();
    expect(getByText(/lines added/i)).toBeInTheDocument();

    expect(getByText("UPLOAD SUCCESS")).toBeInTheDocument();
    expect(getByText(/50/i)).toBeInTheDocument();
    expect(getByText("LINES SAVED")).toBeInTheDocument();
    expect(getByText(/40/i)).toBeInTheDocument();
  });
});
