import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import UiEn from '../localesUI/UiEn.json';
import UiRu from '../localesUI/UiRu.json';

const resources = {
    en: {
        translation: {...UiEn}
    },
    ru: {
        translation: {...UiRu}
    }
};
const storedLanguage = localStorage.getItem('language');

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: storedLanguage || 'en', // язык по умолчанию
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
