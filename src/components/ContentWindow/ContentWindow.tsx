import style from './ContentWindow.module.scss';
import WindowsTemplate from "./WindowsTemplate/WindowsTemplate.tsx";
import {JsonLvlType} from "../../types/JsonLvlType.ts";
import {useEffect, useState} from "react";
import { useSelector} from "react-redux";
import { RootState} from "../../redux/Store.ts";

const ContentWindow = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const lvls = useSelector((state: RootState) => state.lvls);
    const [lvl, setLvl] = useState<JsonLvlType>(lvls.en.lvl1En);

    useEffect(() => {
        const languageNow = () => {
            switch (language) {
                case 'ru':
                    return lvls.ru.lvl1Ru;
                case 'en':
                    return lvls.en.lvl1En;
                default:
                    return lvls.en.lvl1En;
            }
        };

        setLvl(languageNow());
    }, [language]);

    return (
        <div className={style.ContentWindow}>
            <WindowsTemplate jsonData={lvl}/>
        </div>
    );
};

export default ContentWindow;
