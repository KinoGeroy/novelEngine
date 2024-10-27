import React from "react";
import Button from "../../Button/Button.tsx";
import WindowProps from "../../../types/WindowPropsInterface.ts";
import generalPopUpStyle from '../PopUpWindow.module.scss';
import { useTranslation } from 'react-i18next';
import {useDispatch} from "react-redux";
import {changeLanguage} from '../../../redux/languageSlice.ts';

const SettingsWindow: React.FC<WindowProps>  = ({onClose}) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        dispatch(changeLanguage(lng));
    };

    return (
        <div className={generalPopUpStyle.PopUpWindow}>
            <Button classType={"Close"} onClick={onClose}></Button>

            <h2 className={generalPopUpStyle.windowName}>{t('windowNameSettings')}</h2>

            <button onClick={() => {
                handleChangeLanguage('en');
                onClose();
            }}>English</button>
            <button onClick={() => {
                handleChangeLanguage('ru');
                onClose();
            }}>Русский</button>
        </div>
    );
};

export default SettingsWindow;
