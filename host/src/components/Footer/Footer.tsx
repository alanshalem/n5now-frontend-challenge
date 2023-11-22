import React from "react";
import { useTranslation } from "react-i18next";
import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return <StyledFooter>{t("footer")}</StyledFooter>;
};

export default Footer;
