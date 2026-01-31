import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        location: "",
        equipment: [],
        type: null,
        applied: {
            location: "",
            equipment: [],
            type: null,
            visibleCount: 4,
        }
    },
    reducers: {
        changeLocation(state, action) {
            state.location = action.payload;
        },
        toggleEquipment: (state, action) => {
            if (state.equipment.includes(action.payload)) {
                state.equipment = state.equipment.filter(i => i !== action.payload);
            } else {
                state.equipment.push(action.payload);
            }
        },
        changeType(state, action) {
            if (state.type !== action.payload) { state.type = action.payload; } else state.type = null;
        },
        setAppliedFilters: (state) => {
            state.applied.location = state.location;
            state.applied.equipment = [...state.equipment];
            state.applied.type = state.type;
            state.applied.visibleCount = 4;
        },
        addVisibleCount: (state) => {
            state.applied.visibleCount += 4;
        },
    },
});

export const { changeLocation, toggleEquipment, changeType, setAppliedFilters, addVisibleCount } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;