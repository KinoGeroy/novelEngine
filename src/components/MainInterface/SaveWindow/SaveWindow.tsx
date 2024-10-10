import style from './SaveWindow.module.scss';
import generalPopUpStyle from '../PopUpWindow.module.scss';
import Button from "../../Button/Button.tsx";
import WindowProps from "../../../types/WindowPropsInterface.ts";
import React from "react";
import {t} from "i18next";

interface newData {
    now: Date
}

const SaveWindow: React.FC<WindowProps> = ({onClose, numberSaves}) => {
    //медизапрос к серверу сейвы или локальное их хранение

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const now = new Date();
        const newData: newData = { now };

        const existingData = JSON.parse(localStorage.getItem('formData') || '[]');
        existingData.push(newData);

        localStorage.setItem('formData', JSON.stringify(existingData));
        onClose();
        // alert('Данные сохранены!');
    };

    const savedData = JSON.parse(localStorage.getItem('formData') || '[]');
    console.log(savedData);
    return (
        <div className={generalPopUpStyle.PopUpWindow}>
            <div className={style.SaveWindowContainer}>
                <Button classType={2} onClick={onClose}></Button>
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
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <form onSubmit={handleSubmit}>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default SaveWindow;
