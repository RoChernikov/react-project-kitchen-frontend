import {
  getCurrentArticleFailed,
  getCurrentArticleRequest,
  getCurrentArticleSuccess,
} from 'services/slices/articles';
import { AppThunk } from 'services/store';
import api from 'utils/api';

const getCurrentArticleData: AppThunk = (slug: string) => (dispatch) => {
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

export default getCurrentArticleData;
