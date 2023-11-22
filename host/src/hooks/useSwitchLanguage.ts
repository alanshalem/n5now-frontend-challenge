import useSwitchAppRMLanguage from 'micro_rick_morty/hooks/useSwitchAppRMLanguage';
import useSwitchAppHPLanguage from 'micro_harry_potter/hooks/useSwitchAppHPLanguage';

import appInstance from '../i18n';

const useSwitchLanguage = () => {
  const switchAppRMLanguageHook = useSwitchAppRMLanguage();
  const switchAppHPLanguageHook = useSwitchAppHPLanguage();

  // Host
  const switchAppHostLanguage = (languageCode: string) =>
    appInstance.changeLanguage(languageCode);

  // Rick and morty
  const switchAppRMLanguage = (languageCode: string) =>
    switchAppRMLanguageHook(languageCode);

  // Harry Potter
  const switchAppHPLanguage = (languageCode: string) =>
    switchAppHPLanguageHook(languageCode);

  // All apps
  const switchAllLanguages = (languageCode: string) => {
    switchAppHostLanguage(languageCode);
    switchAppRMLanguage(languageCode);
    switchAppHPLanguage(languageCode);
  };

  return {
    switchAppHostLanguage,
    switchAppRMLanguage,
    switchAppHPLanguage,
    switchAllLanguages,
  };
};

export default useSwitchLanguage;
