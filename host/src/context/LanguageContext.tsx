import React from "react";
import { I18nextProvider } from "react-i18next";
import appInstance from "../i18n";

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const AppI18nWrapper: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={appInstance}>{children}</I18nextProvider>;
};

export default AppI18nWrapper;
