import Api from '../../utils/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../services/store';
import { getCookie, setCookie, deleteCookie } from '../../utils/cookie';
import { TStatus, TUser, TErrors } from '../../utils/types';
import { IUserApi } from '../../utils/interfaces';

type TInitialState = {
  status: TStatus;
  user: TUser;
  isAuth: boolean;
  loginErrors: TErrors;
  following: boolean;
};

export const initialState: TInitialState = {
  status: 'success',
  user: {
    username: '',
    email: '',
    bio: '',
    image: '',
  },
  isAuth: !!getCookie('accessToken'),
  loginErrors: {},
  following: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setStatusSuccess(state) {
      state.status = 'success';
    },
    setStatusPending(state) {
      state.status = 'pending';
    },
    setStatusFailed(state) {
      state.status = 'failed';
    },
    setUser(state, action: PayloadAction<TUser>) {
      state.user = action.payload;
    },
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setLoginErrors(state, action: PayloadAction<TErrors>) {
      state.loginErrors = action.payload;
    },
  },
});

export const {
  setStatusSuccess,
  setStatusPending,
  setStatusFailed,
  setUser,
  setAuth,
  setLoginErrors,
} = profileSlice.actions;

export const signIn: AppThunk = (data: IUserApi) => (dispatch: AppDispatch) => {
  dispatch(setStatusPending());
  Api.signIn(data)
    .then((res) => {
      setCookie('accessToken', res.user.token);
      dispatch(setUser(res.user));
      dispatch(setAuth(true));
      dispatch(setStatusSuccess());
      dispatch(setLoginErrors({}));
    })
    .catch((err) => {
      dispatch(setStatusFailed());
      console.log(err.message);
      dispatch(setLoginErrors(err.response.data.errors));
    });
};

export default profileSlice.reducer;
