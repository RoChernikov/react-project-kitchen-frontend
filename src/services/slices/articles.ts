import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'services/store';
import api from 'utils/api';
import { TArticle, TComment } from 'utils/types';

type TInitialState = {
  currentArticle: TArticle | null | undefined;
  articles: TArticle[];
  tags: string[];
  tag: string | null;
  tab: string | null;
  pager: any;
  inProgress: boolean;
  editTags: string[];
  articlesRequest: boolean;
  articlesFailed: boolean;
  currentArticlesRequest: boolean;
  currentArticlesFailed: boolean;
};

export const initialState: TInitialState = {
  currentArticle: null,
  articles: [],
  tags: [],
  tag: null,
  tab: null,
  pager: null,
  inProgress: true,
  editTags: [],
  articlesRequest: false,
  articlesFailed: false,
  currentArticlesRequest: false,
  currentArticlesFailed: false,
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticlesRequest(state) {
      state.articlesRequest = true;
    },
    getArticlesSuccess(state, action: PayloadAction<TArticle[]>) {
      state.articles = action.payload;
      state.articlesFailed = false;
      state.articlesRequest = false;
    },
    getArticlesFailed(state) {
      state.articlesFailed = true;
      state.articlesRequest = false;
    },
    getCurrentArticleSuccess(
      state,
      action: PayloadAction<[TArticle, TComment[]]>
    ) {
      state.currentArticle = action.payload[0];
      state.currentArticle.comments = action.payload[1];
    },
    getCurrentArticleRequest(state) {
      state.currentArticlesRequest = true;
    },
    getCurrentArticleFailed(state) {
      state.currentArticlesFailed = true;
      state.currentArticlesRequest = false;
    },
    resetCurrentArticle(state) {
      state.currentArticle = null;
    },
    resetArticles() {
      return initialState;
    },
  },
});

export const {
  getArticlesRequest,
  getArticlesSuccess,
  getArticlesFailed,
  getCurrentArticleSuccess,
  getCurrentArticleRequest,
  getCurrentArticleFailed,
  resetCurrentArticle,
  resetArticles,
} = articleSlice.actions;


export const getArticlesData: AppThunk = () => (dispatch) => {
  dispatch(getArticlesRequest());
  api
    .getArticlesBy()
    .then((data) => {
      dispatch(getArticlesSuccess(data));
    })
    .catch((err) => {
      dispatch(getArticlesFailed());
      console.log(`Ошибка загрузки списка статей: ${err}`);
    });
};

export const getCurrentArticleData: AppThunk = (slug: string) => (dispatch) => {
  dispatch(getCurrentArticleRequest());
  Promise.all([api.getArticle(slug), api.getComments(slug)])
    .then((data) => {
      dispatch(getCurrentArticleSuccess(data));
    })
    .catch((err) => {
      dispatch(getCurrentArticleFailed());
      console.log(`Ошибка загрузки статьи: ${err}`);
    });
};


export default articleSlice.reducer;
