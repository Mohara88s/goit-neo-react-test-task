// import { createSelector } from '@reduxjs/toolkit';
// import { selectFilter } from '../filters/selectors';

export const selectCampers = (state) => state.campers.campers;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filter) => {
//         return contacts
//             .filter((contact) =>
//                 contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//                 contact.number.includes(filter.toLowerCase())
//             )
//             .sort((a, b) => a.name.localeCompare(b.name));
//     }
// );