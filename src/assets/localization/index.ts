import i18n, {Module, Newable, NewableModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {languageDetectorPlugin} from 'src/utils/languageDetectorPlugin';
import {vi} from './languages';

//empty for now
const resources = {vi: {translation: vi}};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin as Module | NewableModule<Module> | Newable<Module>)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export default i18n;
