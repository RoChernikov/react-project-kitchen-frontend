import axios from 'axios';
import { IUserApi, ICommentApi, IArticleApi } from './interfaces';
import { getCookie } from './cookie';
const BASE_URL = 'http://localhost:3000/api';

type TBaseUrl = { baseUrl: string };

class Api {
  _baseUrl: string;
  constructor({ baseUrl }: TBaseUrl) {
    this._baseUrl = baseUrl;
  }

  _limit(limit: number, page: number): string {
    return `limit=${limit}&offset=${page * limit}`;
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++AUTH
  signIn(data: IUserApi) {
    return axios.post(`${BASE_URL}/users/login`, {
      ...data,
    });
  }

  register(data: IUserApi) {
    return axios.post(`${BASE_URL}/users`, {
      ...data,
    });
  }

  patchUser(data: IUserApi) {
    return axios.put(
      `${BASE_URL}/user`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  getUser() {
    return axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++PROFILE
  getProfile(username: string) {
    return axios.get(`${BASE_URL}/profiles/${username}`);
  }

  followUser(username: string) {
    return axios.post(
      `${BASE_URL}/profiles/${username}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  unfollowUser(username: string) {
    return axios.delete(`${BASE_URL}/profiles/${username}/follow`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++COMMENTS
  getComments(slug: string) {
    return axios.get(`${BASE_URL}/articles/${slug}/comments/`);
  }

  addComment(slug: string, data: ICommentApi) {
    return axios.post(
      `${BASE_URL}/articles/${slug}/comments`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  deleteComment(slug: string, commentId: string) {
    return axios.delete(`${BASE_URL}/articles/${slug}/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++TAGS
  getTags() {
    return axios.get(`${BASE_URL}/tags`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ARTICLES
  createArticle(data: IArticleApi) {
    return axios.post(
      `${BASE_URL}/articles`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  updateArticle(slug: string, data: IArticleApi) {
    return axios.put(
      `${BASE_URL}/articles/${slug}`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  getArticle(slug: string) {
    return axios.get(`${BASE_URL}/articles/${slug}`);
  }

  getArticlesBy(
    by?: 'author' | 'tag' | 'favorited',
    value: string = '',
    limit: number = 5,
    page: number = 0
  ) {
    return axios.get(
      `${BASE_URL}/articles?${by ? by : ''}=${encodeURIComponent(
        value
      )}&${this._limit(limit, page === 0 || page < 0 ? 0 : page - 1)}`
    );
  }

  deleteArticle(slug: string) {
    return axios.delete(`${BASE_URL}/articles/${slug}`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  favoriteArticle(slug: string) {
    return axios.post(
      `${BASE_URL}/articles/${slug}/favorite`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }

  unfavoriteArticle(slug: string) {
    return axios.delete(`${BASE_URL}/articles/${slug}/favorite`, {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    });
  }

  getFeed(limit: number = 10, page: number = 0) {
    return axios.get(
      `${BASE_URL}/articles/feed?${this._limit(
        limit,
        page === 0 || page < 0 ? 0 : page - 1
      )}`,
      {
        headers: {
          Authorization: `Bearer ${getCookie('accessToken')}`,
        },
      }
    );
  }
}

export default new Api({
  baseUrl: BASE_URL,
});
