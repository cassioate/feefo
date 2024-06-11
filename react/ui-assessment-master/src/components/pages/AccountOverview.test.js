import React from "react";
import { render } from "@testing-library/react";
import AccountOverview from "./AccountOverview.jsx";

describe("AccountOverview", () => {
  it("renders account overview correctly", () => {
    const data = {
      supportContact: {
        email: "test@test.com",
      },
      salesOverview: {
        successfulUploads: 50,
        uploads: 100,
        linesAttempted: 200,
        linesSaved: 150,
      },
    };

    const { getByText } = render(<AccountOverview data={data} />);

    expect(getByText("Account Overview")).toBeInTheDocument();
    expect(getByText("YOUR FEEFO SUPPORT CONTACT")).toBeInTheDocument();
    expect(getByText("test@test.com")).toBeInTheDocument();
    expect(getByText("Sales")).toBeInTheDocument();
    expect(getByText(/uploads/i)).toBeInTheDocument();
    expect(getByText(/lines added/i)).toBeInTheDocument();
    expect(getByText(/100/i)).toBeInTheDocument();
    expect(getByText(/150/i)).toBeInTheDocument();
  });
});
