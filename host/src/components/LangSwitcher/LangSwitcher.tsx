import React from "react";
import { useTranslation } from "react-i18next";
import useSwitchLanguage from "../../hooks/useSwitchLanguage";
import { LangButton } from "./LangSwitcher.styles";
import eeuuImage from "../../assets/estados-unidos-96.png"; // Reemplaza con la ruta correcta de tu imagen de Harry Potter
import argImage from "../../assets/argentina-96.png"; // Reemplaza con la ruta correcta de tu imagen de Rick and Morty
import { ImageButton } from "../ImageButton/ImageButton";

interface LanguageSwitcherProps {
  message: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ message }) => {
  const { switchAllLanguages } = useSwitchLanguage();
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    switchAllLanguages(newLanguage);
  };
  return (
    <LangButton data-testid="language-switcher" onClick={handleLanguageSwitch}>
      {i18n.language === "es" ? (
        <ImageButton imageUrl={eeuuImage} altText="Ingles" />
      ) : (
        <ImageButton imageUrl={argImage} altText="Español" />
      )}
    </LangButton>
  );
};

export default LanguageSwitcher;
