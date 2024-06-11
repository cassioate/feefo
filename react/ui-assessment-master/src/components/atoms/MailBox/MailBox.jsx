import React from "react";
import { StyledMailBox } from "./MailBox.js";

const MailBox = ({ children }) => {
  return <StyledMailBox>{children}</StyledMailBox>;
};

export default MailBox;
