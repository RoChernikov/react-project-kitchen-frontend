import { combineReducers } from 'redux';
import { articleSlice } from './articles';

export const rootReducer = combineReducers({
  articles: articleSlice.reducer,
});
