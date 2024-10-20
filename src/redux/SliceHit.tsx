import {createSlice, Slice} from '@reduxjs/toolkit';

interface hitState {
    damage: number,
}

const initialState: hitState = {
    damage: 10,
}

const sliceHit:Slice = createSlice({
    name: 'hit',
    initialState,
    reducers: {
        baseHit: (state) => {
            state.damage += 1;
        },
        criticalHit: (state) => {
            state.damage += 10;
        },
        incrementByAmount: (state, action) => {
            state.damage += action.payload;
        },
    },
});

export const { baseHit} = sliceHit.actions;

export default sliceHit.reducer;

