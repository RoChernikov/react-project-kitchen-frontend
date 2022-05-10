import React, { Dispatch, FC, lazy, SetStateAction, Suspense } from 'react';
import NotFound from 'pages/not-found-page';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import DeleteConfirm from 'components/delete-confirm/delete-confirm';
import Layout from '../layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import RequireAuth from '../../hoc/require-auth';
import '../../scss/_fonts.scss';
import Article from '../article/article';
import { mockStore } from '../../utils/mock';
import LoginPage from 'pages/login-page';
const MainPage = lazy(() => import('../../pages/main-page'));
const ProfilePage = lazy(() => import('../../pages/profile-page'));
//--------------------------------------------------------------------------------

const App: FC = () => {
  const { articles, comments, user } = mockStore;
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };
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
            path="articles/123"
            element={
              <Suspense fallback={<Loader />}>
                <Article
                  article={articles[0]}
                  comments={comments}
                  currentUser={user}
                />
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
