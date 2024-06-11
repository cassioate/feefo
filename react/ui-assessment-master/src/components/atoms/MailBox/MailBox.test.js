import React from "react";
import { render } from "@testing-library/react";
import MailBox from "./MailBox.jsx";

describe("MailBox", () => {
  it("renders without crashing", () => {
    const { container } = render(<MailBox />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
