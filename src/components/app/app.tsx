import { FC, lazy, Suspense, useEffect } from 'react';
import NotFound from 'pages/not-found-page';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import DeleteConfirm from 'components/delete-confirm/delete-confirm';
import Layout from '../layout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import RequireAuth from '../../hoc/require-auth';
import '../../scss/_fonts.scss';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { deleteArticle, getArticlesData } from 'services/slices/articles';
import { selectCurrentArticle } from 'services/selectors/articles';
const MainPage = lazy(() => import('../../pages/main-page'));
const LoginPage = lazy(() => import('../../pages/login-page'));
const RegisterPage = lazy(() => import('../../pages/register-page'));
const SettingsPage = lazy(() => import('../../pages/settings-page'));
const ArticlePage = lazy(() => import('../../pages/article-page'));
const NewArticlePage = lazy(() => import('../../pages/new-article-page'));
const EditorPage = lazy(() => import('../../pages/editor-page'));
const ProfilePage = lazy(() => import('../../pages/profile'));
//--------------------------------------------------------------------------------

const App: FC = () => {
  const location = useLocation();
  const history = useNavigate();
  const state = location.state as { backgroundLocation?: Location };
  const article = useAppSelector(selectCurrentArticle);
  const dispatch = useAppDispatch();

  const handleArticleDelete = () => {
    dispatch(deleteArticle(article?.slug));
    history(`/`);
  };

  useEffect(() => {
    dispatch(getArticlesData());
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
            path="new-article"
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
              <Modal
                title="Удалить запись"
                children={<DeleteConfirm onClick={handleArticleDelete} />}
              />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
