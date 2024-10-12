import style from './ContentWindow.module.scss';
import WindowsTemplate from "./WindowsTemplate/WindowsTemplate.tsx";
import {JsonLvlType} from "../../types/JsonLvlType.ts";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/Store.ts";

//all lvls connection
import lvlRu from '../../mapLvl/lvlRu.json';
import lvlEn from '../../mapLvl/lvlEn.json';

//

const ContentWindow = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const [lvl, setLvl] = useState<JsonLvlType>(lvlEn);

    useEffect(() => {
        const languageNow = () => {
            switch (language) {
                case 'ru':
                    return lvlRu;
                case 'en':
                    return lvlEn;
                default:
                    return lvlEn;
            }
        };

        setLvl(languageNow());
    }, [language]);


    return (
        <div className={style.ContentWindow}>
            <WindowsTemplate jsonData={lvl}/>
            {/*{t('avatar')}*/}
        </div>
    );
};

export default ContentWindow;
