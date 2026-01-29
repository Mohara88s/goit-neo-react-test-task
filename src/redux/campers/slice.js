import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamper } from './operations';

const handlePending = (state) => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        campers: [],
        currentCamper: null,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCampers.pending, handlePending)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.campers = action.payload.items;
            })
            .addCase(fetchCampers.rejected, handleRejected)

            .addCase(fetchCamper.pending, handlePending)
            .addCase(fetchCamper.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.currentCamper = action.payload;
            })
            .addCase(fetchCamper.rejected, handleRejected)
    },
});

export const campersReducer = campersSlice.reducer;