import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

import lvl1Ru from '../mapLvl/lvl1Ru.json';
import lvl1En from '../mapLvl/lvl1En.json';
import lvl2Ru from '../mapLvl/lvl2Ru.json';
import lvl2En from '../mapLvl/lvl2En.json';
import {JsonLvlType} from "../types/JsonLvlType.ts";

interface LvlsState {
    currentLvl: JsonLvlType,
}

const initialState: LvlsState = {
    currentLvl: lvl1En,
}

const lvlsMap: Record<string, Record<string, JsonLvlType>> = {
    En: {
        lvl1En,
        lvl2En,
    },
    Ru: {
        lvl1Ru,
        lvl2Ru,
    }

};

const SliceLvls:Slice = createSlice({
    name: 'lvls',
    initialState,
    reducers: {
        nextLvl: (state, action: PayloadAction<string>) => {
            const [lang, lvlName] = action.payload.split('_');
            console.log(action.payload)
            if (lvlsMap[lang] && lvlsMap[lang][lvlName]) {
                state.currentLvl = lvlsMap[lang][lvlName];
            } else {
                console.error(`Level ${lvlName} not found`);
            }
        },

        lvlChangeLang: (state, action: PayloadAction<{ lvl: JsonLvlType, lang: string }>) => {
            const change = action.payload;
            const currentLvlName = change.lvl.lvlName;
            const newLang = change.lang;

            const changedLvlName = currentLvlName.slice(0, -2) + newLang;

            // Проверяем, существует ли новый уровень в lvlsMap
            if (lvlsMap[newLang] && lvlsMap[newLang][changedLvlName]) {
                state.currentLvl = lvlsMap[newLang][changedLvlName];
            } else {
                console.error(`Level ${changedLvlName} not found for language ${newLang}`);
            }
        },
    },
});

export const {nextLvl, lvlChangeLang} = SliceLvls.actions;
export default SliceLvls.reducer;
