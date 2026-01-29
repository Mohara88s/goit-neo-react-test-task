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
        }
    },
});

export const { changeLocation, toggleEquipment, changeType, setAppliedFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;