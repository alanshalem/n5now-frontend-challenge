import appHPInstance from '../i18n';

const useSwitchLanguage = () => {
  return (languageId: string) => appHPInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
