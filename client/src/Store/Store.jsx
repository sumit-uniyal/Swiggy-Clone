import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './Slices/AuthSlice'
import resReducer from './Slices/RestaurantSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}
const rootReducer = combineReducers({
    auth:authReducer,
    restaurant:resReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
    }),
})

export const persistor = persistStore(store);
export default store