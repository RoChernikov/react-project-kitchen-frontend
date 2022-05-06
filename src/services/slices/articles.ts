import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export default articleSlice.reducer;
