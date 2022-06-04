import request from './api-client';
import { IUserApi, ICommentApi, IArticleApi } from './interfaces';
import { TBy } from './types';

class Api {
  _limit(limit: number, page: number): string {
    return `limit=${limit}&offset=${page * limit}`;
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++AUTH
  signIn(data: IUserApi) {
    return request.post('/users/login', data).then((res) => res.data);
  }

  register(data: IUserApi) {
    return request.post('/users', data).then((res) => res.data);
  }

  patchUser(data: IUserApi) {
    return request.put('/user', data).then((res) => res.data);
  }

  getUser() {
    return request.get('/user').then((res) => res.data);
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++PROFILE
  getProfile(username: string) {
    return request.get(`/profiles/${username}`).then((res) => res.data);
  }

  followUser(username: string) {
    return request.post(`/profiles/${username}/follow`).then((res) => res.data);
  }

  unfollowUser(username: string) {
    return request
      .delete(`/profiles/${username}/follow`)
      .then((res) => res.data);
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++COMMENTS
  getComments(slug: string) {
    return request
      .get(`/articles/${slug}/comments/`)
      .then((res) => res.data.comments);
  }

  addComment(slug: string, data: ICommentApi) {
    return request
      .post(`/articles/${slug}/comments`, data)
      .then((res) => res.data.comment);
  }

  deleteComment(slug: string, commentId: string) {
    return request.delete(`/articles/${slug}/comments/${commentId}`);
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++TAGS
  getTags() {
    return request.get(`/tags`);
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ARTICLES
  createArticle(data: IArticleApi) {
    return request.post(`/articles`, data).then((res) => res.data.article);
  }

  updateArticle(slug: string, data: IArticleApi) {
    return request
      .put(`/articles/${slug}`, data)
      .then((res) => res.data.article);
  }

  getArticle(slug: string) {
    return request.get(`/articles/${slug}`).then((res) => res.data.article);
  }

  getArticlesBy(
    by?: TBy,
    value: string = '',
    limit: number = 0,
    page: number = 0
  ) {
    return request
      .get(
        `/articles?${by ? by : ''}=${encodeURIComponent(value)}&${this._limit(
          limit,
          page === 0 || page < 0 ? 0 : page - 1
        )}`
      )
      .then((res) => res.data.articles);
  }

  deleteArticle(slug: string) {
    return request.delete(`/articles/${slug}`);
  }

  favoriteArticle(slug: string) {
    return request
      .post(`/articles/${slug}/favorite`)
      .then((res) => res.data.article);
  }

  unfavoriteArticle(slug: string) {
    return request
      .delete(`/articles/${slug}/favorite`)
      .then((response) => response.data.article);
  }

  getFeed(limit: number = 10, page: number = 0) {
    return request.get(
      `/articles/feed?${this._limit(
        limit,
        page === 0 || page < 0 ? 0 : page - 1
      )}`
    );
  }
}

export default new Api();
