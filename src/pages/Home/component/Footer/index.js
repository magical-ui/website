import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { StFooterContainer, StyledFooterIconsBar } from "./styles";

const Footer = () => {
  return (
    <StFooterContainer>
      <h4> © Magical UI</h4>
      <span>2019 - {new Date().getFullYear()} </span>
    </StFooterContainer>
  );
};

export default Footer;
