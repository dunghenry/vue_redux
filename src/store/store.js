import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from './logger';
const store = configureStore({
    reducer: logger(rootReducer),
});
export default store;
