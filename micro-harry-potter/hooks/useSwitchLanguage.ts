import appCInstance from '../src/i18n';

const useSwitchLanguage = () => {
  return (languageId: string) => appCInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
