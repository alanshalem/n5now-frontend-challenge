import React from "react";
import { I18nextProvider } from "react-i18next";
import appRMInstance from "../i18n";

interface AppI18nWrapperProps {
  children: React.ReactNode;
}

const AppRMI18nWrapper: React.FC<AppI18nWrapperProps> = ({ children }) => {
  return <I18nextProvider i18n={appRMInstance}>{children}</I18nextProvider>;
};

export default AppRMI18nWrapper;
