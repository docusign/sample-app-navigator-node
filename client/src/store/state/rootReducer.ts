import { combineReducers } from '@reduxjs/toolkit';

import agreementsReducer from './agreements';
import authReducer from './auth';

const rootReducer = combineReducers({
    agreements: agreementsReducer,
    auth: authReducer,
});

export default rootReducer;
