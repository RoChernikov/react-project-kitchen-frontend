import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'services/store';
import api from 'utils/api';
import { ICommentApi } from 'utils/interfaces';
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
  addCommentRequest: boolean;
  addCommentFailed: boolean;
  deleteCommentRequest: boolean;
  deleteCommentFailed: boolean;
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
  addCommentRequest: false,
  addCommentFailed: false,
  deleteCommentRequest: false,
  deleteCommentFailed: false,
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
    addCommentRequest(state) {
      state.addCommentRequest = true;
    },
    addCommentFailed(state) {
      state.addCommentFailed = true;
      state.addCommentRequest = false;
    },
    addCommentSuccess(state, action: PayloadAction<TComment>) {
      // commentErrors: action.error ? action.payload.errors : null,
      state.currentArticle?.comments.unshift(action.payload);
    },
    deleteCommentRequest(state) {
      state.deleteCommentRequest = true;
    },
    deleteCommentFailed(state) {
      state.deleteCommentFailed = true;
      state.deleteCommentRequest = false;
    },
    deleteCommentSuccess(state, action: PayloadAction<string>) {
      if (state.currentArticle) {
        state.currentArticle.comments = state.currentArticle?.comments.filter(
          (comment) => comment.id !== action.payload
        );
      } else {
        return initialState;
      }
    },
    toggleArticleSuccess(state, action: PayloadAction<TArticle>) {
      state.articles.forEach((article) => {
        if (state.currentArticle && article?.slug === action.payload.slug) {
          state.currentArticle.favorited = action.payload.favorited;
          state.currentArticle.favoritesCount = action.payload.favoritesCount;
          article.favorited = action.payload.favorited;
          article.favoritesCount = action.payload.favoritesCount;
        }
      });
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
  addCommentRequest,
  addCommentFailed,
  addCommentSuccess,
  deleteCommentRequest,
  deleteCommentFailed,
  deleteCommentSuccess,
  toggleArticleSuccess,
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

export const postComment: AppThunk =
  (slug: string, comment: ICommentApi) => (dispatch) => {
    dispatch(addCommentRequest());
    api
      .addComment(slug, comment)
      .then((data) => {
        dispatch(addCommentSuccess(data));
      })
      .catch((err) => {
        dispatch(addCommentFailed());
        console.log(`Ошибка добавления комментария: ${err}`);
      });
  };

export const deleteComment: AppThunk =
  (slug: string, commentId: string) => (dispatch) => {
    dispatch(deleteCommentRequest());
    api
      .deleteComment(slug, commentId)
      .then(() => {
        dispatch(deleteCommentSuccess(commentId));
      })
      .catch((err) => {
        dispatch(deleteCommentFailed());
        console.log(`Ошибка удаления комментария: ${err}`);
      });
  };

export const likeArticle: AppThunk = (slug: string) => (dispatch) => {
  api
    .favoriteArticle(slug)
    .then((article) => {
      dispatch(toggleArticleSuccess(article));
    })
    .catch((err) => {
      console.log(`Ошибка лайка статьи: ${err}`);
    });
};

export const unlikeArticle: AppThunk = (slug: string) => (dispatch) => {
  api
    .unfavoriteArticle(slug)
    .then((article) => {
      dispatch(toggleArticleSuccess(article));
    })
    .catch((err) => {
      console.log(`Ошибка удаления лайка статьи: ${err}`);
    });
};

export default articleSlice.reducer;
