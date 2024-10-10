import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface healthState {
    health: number;
}

const initialState: healthState = {
    health: 100,
};

const sliceHealth:Slice = createSlice({
    name: 'health',
    initialState,
    reducers: {
        getDamage: (state, action: PayloadAction<number>) => {
            state.health -= action.payload;
        },
    },
});

export const { getDamage} = sliceHealth.actions;

export default sliceHealth.reducer;

