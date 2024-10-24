import { combineReducers } from '@reduxjs/toolkit';

import agreementsReducer from './agreements';
import userReducer from './user';

const rootReducer = combineReducers({
    agreements: agreementsReducer,
    user: userReducer,
});

export default rootReducer;
