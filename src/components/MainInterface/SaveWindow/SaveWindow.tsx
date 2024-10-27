import style from './SaveWindow.module.scss';
import generalPopUpStyle from '../PopUpWindow.module.scss';
import Button from "../../Button/Button.tsx";
import WindowProps from "../../../types/WindowPropsInterface.ts";
import React from "react";
import {t} from "i18next";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/Store.ts";
import {JsonLvlType} from "../../../types/JsonLvlType.ts";
import {loadLvl} from "../../../redux/SliceLvls.ts";

interface newData {
    now: Date
    lvl: JsonLvlType
}

const SaveWindow: React.FC<WindowProps> = ({onClose, numberSaves}) => {
    const qwe = useSelector((state: RootState) => state.lvls);
    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const now = new Date();
        const lvl = qwe.currentLvl;
        const newData: newData = { now, lvl };

        const existingData = JSON.parse(localStorage.getItem('formData') || '[]');
        existingData.push(newData);

        localStorage.setItem('formData', JSON.stringify(existingData));
        // onClose();
    };

    const savedData = JSON.parse(localStorage.getItem('formData') || '[]');

    return (
        <div className={generalPopUpStyle.PopUpWindow}>
            <div className={style.SaveWindowContainer}>
                <Button classType={"Close"} onClick={onClose}></Button>
                <div>
                    <h2 className={generalPopUpStyle.windowName}>{t('windowNameSave')}</h2>
                    {numberSaves}
                    <span></span>
                </div>
                <ol>
                    {savedData.map((data: newData, index: number) => (
                        <li key={index}>
                            <ul>
                                <li>
                                    <span>
                                        {new Date(data.now).toDateString()}
                                    </span>
                                </li>
                                <li>
                                    <Button classType={"Standard"} onClick={() => dispatch(loadLvl(data.lvl))}>{t('loadLvl')}</Button>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <form onSubmit={handleSubmit}>
                <button type="submit">{t('buttonSave')}</button>
            </form>
        </div>
    );
};

export default SaveWindow;
