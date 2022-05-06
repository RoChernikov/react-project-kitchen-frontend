import {
  getArticlesFailed,
  getArticlesRequest,
  getArticlesSuccess,
} from 'services/slices/articles';
import { AppThunk } from 'services/store';
import api from 'utils/api';

const getArticlesData: AppThunk = () => (dispatch) => {
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

export default getArticlesData;
