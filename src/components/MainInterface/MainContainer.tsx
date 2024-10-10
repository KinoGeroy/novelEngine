import style from './MainContainer.module.scss';
import Button from "../Button/Button.tsx";
import React, {useState} from "react";
import SaveWindow from "./SaveWindow/SaveWindow.tsx";
import SettingsWindow from "./SettingsWindow/SettingsWindow.tsx";
import {t} from "i18next";
// import {useDispatch, useSelector} from "react-redux";
//
// import {getDamage} from "../../redux/SliceHealth.tsx";
// import {AppDispatch, RootState} from "../../redux/Store.ts";

type Window = 'settings' | 'save' | null;

const MainContainer: React.FC = () => {
    const [Window, setWindow] = useState<Window>();

    // const hit = useSelector((state: RootState) => state.hit.damage);
    // const health = useSelector((state: RootState) => state.health.health);
    // const dispatch = useDispatch<AppDispatch>();

    const handleShowSettingsWindow = () => {
        setWindow('settings');
    };

    const handleShowSaveWindow = () => {
        setWindow('save');
    };

    const handleCloseWindow = () => {
        setWindow(null);
    };

    // const handleHit = () => {
    //     dispatch(getDamage(hit));
    // };

    return (
        <>
            <div className={style.mainContainer}>
                <h1 className={style.mainContainerHeader}>
                    The Game
                </h1>
                <Button classType={1} onClick={handleShowSettingsWindow}>{t('buttonSettings')}</Button>
                <Button classType={1} onClick={handleShowSaveWindow}>{t('buttonSave')}</Button>

                {/*<span className={style.mainContainerHeader}>*/}
                {/*    {health}*/}
                {/*</span>*/}
                {/*<Button classType={1} onClick={handleHit}>hit</Button>*/}

            </div>
            {Window === 'settings' && <SettingsWindow onClose={handleCloseWindow} numberSaves={4}/>}
            {Window === 'save' && <SaveWindow onClose={handleCloseWindow} numberSaves={4}/>}

        </>

    );
};

export default MainContainer;
