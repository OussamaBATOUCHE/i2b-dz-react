import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "fr",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      crossDomain: true,
      loadPath: `${process.env.PUBLIC_URL}/static/translation/{{lng}}.json`,
    },
  });
  
export default i18n;
