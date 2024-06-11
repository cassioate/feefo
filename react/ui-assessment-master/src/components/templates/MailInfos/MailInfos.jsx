import React from "react";
import { StyledContainer } from "./MailInfos.js";
import ContactText from "../../atoms/ContactText/ContactText.jsx";
import InfoContainer from "../../organisms/InfoContainer/InfoContainer.jsx";
import LetterIcon from "../../atoms/LetterIcon/LetterIcon.jsx";
import MailContainer from "../../atoms/MailBox/MailBox.jsx";
import ContactSubText from "../../atoms/ContactSubText/ContactSubText.jsx";
import ContactMail from "../../atoms/ContactMail/ContactMail.jsx";
import ContactNumber from "../../atoms/ContactNumber/ContactNumber.jsx";
import EnvelopeIcon from "../../atoms/EnvelopeIcon/EnvelopeIcon.jsx";
import Contact from "../../molecules/Contact/Contact.jsx";

export const MailInfos = ({ supportContact }) => {
  return (
    <StyledContainer>
      <ContactText />
      <InfoContainer>
        <LetterIcon>S</LetterIcon>
        <Contact>
          <ContactSubText>Support</ContactSubText>
          <MailContainer>
            <EnvelopeIcon />
            <ContactMail>{supportContact.email}</ContactMail>
          </MailContainer>
        </Contact>
        {/* I'm not using a number from the stub here, because i saw no number there */}
        <ContactNumber>020 3362 4208</ContactNumber>
      </InfoContainer>
    </StyledContainer>
  );
};

export default MailInfos;
