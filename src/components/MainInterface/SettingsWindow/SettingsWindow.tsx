// import React from 'react';
import React from "react";
import Button from "../../Button/Button.tsx";
import WindowProps from "../../../types/WindowPropsInterface.ts";
import generalPopUpStyle from '../PopUpWindow.module.scss';
import { useTranslation } from 'react-i18next';
import {useDispatch} from "react-redux";
// import {RootState} from "../../../redux/Store.ts";
import {changeLanguage} from '../../../redux/languageSlice.ts';
// import style from './SettingsWindow.module.scss';


const SettingsWindow: React.FC<WindowProps>  = ({onClose}) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    // const language = useSelector((state: RootState) => state.language.language);

    const handleChangeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        dispatch(changeLanguage(lng));
    };


    return (
        <div className={generalPopUpStyle.PopUpWindow}>
            <Button classType={2} onClick={onClose}></Button>

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
