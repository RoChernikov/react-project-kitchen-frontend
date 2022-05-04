import { createSlice } from '@reduxjs/toolkit';

//export чтобы ts не ругался
export const initialState = {
  currentArticle: {
    slug: '',
    body: '',
    author: 'ABC',
    comments: [],
    commentErrors: null,
  },
  articles: [],
  articlesCount: 0,
  tags: [],
  tag: null,
  tab: null,
  pager: null,
  inProgress: true,
  editTags: [],
};

export const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    ARTICLE_PAGE_LOADED: (state: any, action: any) => {
      state.currentArticle = action.payload.res[0].article;
      state.currentArticle.comments = action.payload.res[1].comments;
    },
  },
});
