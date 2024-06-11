import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact.jsx";

describe("Contact", () => {
  it("renders without crashing", () => {
    const { container } = render(<Contact>Contact Content</Contact>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
