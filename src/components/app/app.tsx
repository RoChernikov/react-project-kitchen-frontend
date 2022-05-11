import { FC, lazy, Suspense, useEffect } from 'react';
import NotFound from 'pages/not-found-page';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import DeleteConfirm from 'components/delete-confirm/delete-confirm';
import Layout from '../layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import RequireAuth from '../../hoc/require-auth';
import '../../scss/_fonts.scss';
import { useAppDispatch } from 'services/hooks';
import { getArticlesData } from 'services/slices/articles';
import { signIn } from 'services/slices/profile';
import LoginPage from 'pages/login-page';
import ArticlePage from 'pages/article-page';
import RegisterPage from 'pages/register-page';
import SettingsPage from 'pages/settings-page';
import NewArticlePage from 'pages/new-article-page';
import { EditorPage } from 'pages/editor-page';
const MainPage = lazy(() => import('../../pages/main-page'));
const ProfilePage = lazy(() => import('../../pages/profile'));
//import ProfilePage from 'pages/profile/index';
//--------------------------------------------------------------------------------

const App: FC = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlesData());
    // временный хардкод логин
    dispatch(
      signIn({
        user: { username: 'julia', email: 'julia@gmail.com', password: '123' },
      })
    );
    // dispatch(
    //   patchUser({
    //     user: { image: 'https://klike.net/uploads/posts/2019-05/1558692542_28.jpg' },
    //   })
    // );
  }, [dispatch]);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<RequireAuth children={<Layout />} />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="articles/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ArticlePage />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <RegisterPage />
              </Suspense>
            }
          />
          <Route
            path="settings"
            element={
              <Suspense fallback={<Loader />}>
                <SettingsPage />
              </Suspense>
            }
          />
          <Route
            path="newarticle"
            element={
              <Suspense fallback={<Loader />}>
                <NewArticlePage />
              </Suspense>
            }
          />
          <Route
            path="editor"
            element={
              <Suspense fallback={<Loader />}>
                <EditorPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="modal"
            element={
              <Modal title="Удалить запись" children={<DeleteConfirm />} />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;