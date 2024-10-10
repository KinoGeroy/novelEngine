// import React from 'react';
import style from './ContentWindow.module.scss';
import WindowsTemplate from "./WindowsTemplate/WindowsTemplate.tsx";

//all lvls connection
import lvl1 from '../../mapLvl/lvl.json';

//

export interface JsonLvlType {
    // name: string,
    lvlId: number,
    // lvlTypeId: number,
    // dialog?: object,
    // dialogId?: number,
    data: Array<{
        dataType: number,
        dataId: number,
        speaker?: {
            speakerId: number,
            avatar: string,
            avatarName: string,

        },
        massages?: Array<{
            massageText: string,
            massageTextID: number
        }>,
    }>,
}
 // interface JsonLvlTypeData extends JsonLvlType {
 //    data: [[key: string]: any]{}
 // }

const ContentWindow = () => {
    console.log(lvl1);
    return (
        <div className={style.ContentWindow}>
            qwe1@
            <WindowsTemplate jsonData={lvl1}/>
            {/*{
                КОЛИЧЕСТВО TEMPLATE ЗАВИСИТ ОТ РАЗЛИЧНЫХ ТИПОВ СЦЕНЫ, ТИП СЦЕНЫ УКАЗАН В JSON
                НАДО ПРОПИСАТЬ ВСЕ ТИПЫ ИЛИ СДЕЛАТЬ УНИВЕРСАЛЬНЫЙ ПОД ВЫЗОВ ОПРЕДЕЛЕННОГО ТИПА= ТИП ФУНКЦИИ ОБРАБОТЧИКА КОНТЕЙНЕРА
                У КАЖДОГО ЭЛЕМЕНТА ЕСТЬ ТИП ID И КОЛИЧЕСТВОqwe
            }*/}
        </div>
    );
};

export default ContentWindow;
