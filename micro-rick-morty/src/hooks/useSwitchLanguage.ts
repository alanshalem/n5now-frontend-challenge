import appBInstance from '../i18n';

const useSwitchLanguage = () => {
  return (languageId: string) => appBInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
