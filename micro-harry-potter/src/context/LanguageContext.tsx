import React from "react";
import { I18nextProvider } from "react-i18next";
import appHPInstance from "../i18n";

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const AppHPI18nWrapper: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={appHPInstance}>{children}</I18nextProvider>;
};

export default AppHPI18nWrapper;
