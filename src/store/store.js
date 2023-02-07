import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logs from 'redux-logger';
import logger from './logger';
const store = configureStore({
    reducer: logger(rootReducer),
    middleware: [logs]
});
export default store;
