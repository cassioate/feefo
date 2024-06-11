import React from "react";
import { render } from "@testing-library/react";
import ArrowUploadIcon from "./ArrowUploadIcon.jsx";

describe("ArrowUploadIcon", () => {
  it("renders without crashing", () => {
    const { container } = render(<ArrowUploadIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
