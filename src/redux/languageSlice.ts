import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: localStorage.getItem('language') || 'en',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
            localStorage.setItem('language', action.payload);
        },
    },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
