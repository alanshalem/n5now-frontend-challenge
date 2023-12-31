import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locales/en';
import esJSON from './locales/es';

const resources = {
  en: { translation: enJSON },
  es: { translation: esJSON },
};

const appRMInstance = i18n.createInstance();

appRMInstance.use(initReactI18next).init({
  resources,
  keySeparator: false,
  lng: 'en',
  fallbackLng: 'en',
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default appRMInstance;
