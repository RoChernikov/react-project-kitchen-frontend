import { combineReducers } from 'redux';
import { articleSlice } from './article';

export const rootReducer = combineReducers({
  /*сюды редьюсеры из импортированных слайсов, типо*/

  articles: articleSlice.reducer,
});
