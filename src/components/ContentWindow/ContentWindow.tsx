import style from './ContentWindow.module.scss';
import WindowsTemplate from "./WindowsTemplate/WindowsTemplate.tsx";
import {JsonLvlType} from "../../types/JsonLvlType.ts";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/Store.ts";
import {lvlChangeLang} from "../../redux/SliceLvls.ts";

const ContentWindow = () => {
    const language = useSelector((state: RootState) => state.language.language);
    const lvls = useSelector((state: RootState) => state.lvls);
    const [lvl, setLvl] = useState<JsonLvlType>(lvls.currentLvl);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const languageNow = () => {
            switch (language) {
                case 'ru':
                    dispatch(lvlChangeLang({lvl: lvls.currentLvl, lang: 'Ru'}))
                    return lvls.currentLvl;
                case 'en':
                    dispatch(lvlChangeLang({lvl: lvls.currentLvl, lang: 'En'}))
                    return lvls.currentLvl;
                default:
                    return lvls.currentLvl;
            }
        };

        setLvl(languageNow());
    }, [language, lvls]);

    return (
        <div className={style.ContentWindow}>
            <WindowsTemplate jsonData={lvl}/>
        </div>
    );
};

export default ContentWindow;
