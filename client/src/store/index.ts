import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from 'redux-persist/lib/storage';
import rootReducer from './state/rootReducer';
import { useDispatch } from 'react-redux';

// Configuration for redux-persist
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'agreements',
        'user',
    ],
    // keyPrefix: `${userId}-`,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializable check for non-serializable values
        }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store, persistor };
