import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LangSwitcher/LangSwitcher";
import { StyledNavbar, Title } from "./Navbar.styles";

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation();
  return (
    <StyledNavbar>
      <Title>N5Now - Frontend Challenge - t{"app"}</Title>
      <LanguageSwitcher message="changeLanguage" />
    </StyledNavbar>
  );
};

export default Navbar;
