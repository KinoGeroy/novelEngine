import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            buttonSettings: 'Settings',
            buttonSave: 'Save',
            windowNameSettings: 'Settings',
            windowNameSave: 'Save',
            // другие переводы
        }
    },
    ru: {
        translation: {
            buttonSettings: 'Настройки',
            buttonSave: 'Сохранить',
            windowNameSettings: 'Настройки',
            windowNameSave: 'Сохранения',
            // другие переводы
        }
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
