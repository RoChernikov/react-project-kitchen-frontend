import axios from 'axios';
import { getCookie } from './cookie';
import { IUserApi, ICommentApi, IArticleApi } from './interfaces';
const client = () => {
  const defaultOptions = {
    baseURL: 'http://localhost:3000/api',
    headers: {
      Authorization: getCookie('accessToken')
        ? `Bearer ${getCookie('accessToken')}`
        : '',
    },
  };

  return {
    get: (url: string, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (
      url: string,
      data?: IUserApi | ICommentApi | IArticleApi,
      options = {}
    ) => axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url: string, data: IUserApi | IArticleApi, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url: string, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export default client();
