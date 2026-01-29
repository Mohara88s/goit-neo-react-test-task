import { createSelector } from '@reduxjs/toolkit';
import { selectAppliedFilters } from '../filters/selectors';

export const selectCampers = (state) => state.campers.campers;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
    [selectCampers, selectAppliedFilters],
    (campers, { locationFilter, equipment, type }) => {
        return campers
            .filter((camper) => {
                const locationCoincidence = locationFilter
                    ? locationFilter
                        .toLowerCase()
                        .split(',')
                        .every(part => camper.location.toLowerCase().includes(part.trim().toLowerCase()))
                    : true;

                const equipmentCoincidence = equipment.every((eItem) => {
                    if (eItem === 'automatic') return camper.transmission === 'automatic';
                    return camper[eItem] === true;
                });
                const typeCoincidence = type ? camper.form === type : true;
                return locationCoincidence && equipmentCoincidence && typeCoincidence
            }
            )
    }
);
