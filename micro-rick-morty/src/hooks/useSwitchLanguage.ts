import appRMInstance from '../i18n';

const useSwitchLanguage = () => {
  return (languageId: string) => appRMInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
