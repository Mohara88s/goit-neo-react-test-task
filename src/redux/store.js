import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/slice';
import { filtersReducer } from './filters/slice';
import { favoritesReducer } from "./favorites/slice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Persisting token field from auth slice to localstorage
const filtersPersistConfig = {
    key: "filters",
    storage,
};
const favoritesPersistConfig = {
    key: "favorites",
    storage,
};
export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: persistReducer(filtersPersistConfig, filtersReducer),
        favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: import.meta.env.MODE === 'development',
});

export const persistor = persistStore(store);