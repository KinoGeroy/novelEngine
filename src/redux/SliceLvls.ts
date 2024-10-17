import {createSlice, Slice} from '@reduxjs/toolkit';
import lvl1Ru from '../mapLvl/lvl1Ru.json';
import lvl1En from '../mapLvl/lvl1En.json';
import lvl2Ru from '../mapLvl/lvl2Ru.json';
import lvl2En from '../mapLvl/lvl2En.json';


interface lvls {
    en:object,
    ru:object,
}

const initialState:lvls = {
    en: {
        lvl1En,
        lvl2En,
    },
    ru: {
        lvl1Ru,
        lvl2Ru,
    }
}

const SliceLvls:Slice = createSlice({
    name: 'lvls',
    initialState,
    reducers: {

    }
})

export default SliceLvls.reducer;
