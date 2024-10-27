import style from './MainContainer.module.scss';
import Button from "../Button/Button.tsx";
import React, {useState} from "react";
import SaveWindow from "./SaveWindow/SaveWindow.tsx";
import SettingsWindow from "./SettingsWindow/SettingsWindow.tsx";
import {t} from "i18next";

type Window = 'settings' | 'save' | null;

const MainContainer: React.FC = () => {
    const [Window, setWindow] = useState<Window>();

    const handleShowSettingsWindow = () => {
        setWindow('settings');
    };

    const handleShowSaveWindow = () => {
        setWindow('save');
    };

    const handleCloseWindow = () => {
        setWindow(null);
    };

    return (
        <>
            <div className={style.mainContainer}>
                <h1 className={style.mainContainerHeader}>
                    The Game
                </h1>
                <Button classType={"Standard"} onClick={handleShowSettingsWindow}>{t('buttonSettings')}</Button>
                <Button classType={"Standard"} onClick={handleShowSaveWindow}>{t('buttonSave')}</Button>

            </div>
            {Window === 'settings' && <SettingsWindow onClose={handleCloseWindow} numberSaves={4}/>}
            {Window === 'save' && <SaveWindow onClose={handleCloseWindow} numberSaves={4}/>}
        </>

    );
};

export default MainContainer;
