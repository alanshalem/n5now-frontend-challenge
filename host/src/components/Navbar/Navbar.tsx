import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LangSwitcher/LangSwitcher";
import { StyledNavbar, Title } from "./Navbar.styles";
import n5icon from "../../assets/n5-250.png"; // Reemplaza con la ruta correcta de tu imagen de Harry Potter
import { ImageButton } from "../ImageButton/ImageButton";

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation();
  return (
    <StyledNavbar>
      <Title>
        <ImageButton imageUrl={n5icon} altText="Ingles" /> - Frontend Challenge
      </Title>
      <LanguageSwitcher message="changeLanguage" />
    </StyledNavbar>
  );
};

export default Navbar;
