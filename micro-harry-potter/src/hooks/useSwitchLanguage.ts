import appCInstance from '../i18n';

const useSwitchLanguage = () => {
  return (languageId: string) => appCInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
