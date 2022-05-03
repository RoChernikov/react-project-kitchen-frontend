import React, { FC, lazy, Suspense } from 'react';
import Loader from '../loader/loader';
import Modal from '../modal/modal';
import Layout from '../layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import RequireAuth from '../../hoc/require-auth';
import '../../scss/_fonts.scss';
const MainPage = lazy(() => import('../../pages/main-page'));
const ProfilePage = lazy(() => import('../../pages/profile-page'));
const NotFound = lazy(() => import('../../pages/not-found-page'));
//--------------------------------------------------------------------------------

const App: FC = () => {
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
            path="profile"
            element={
              <Suspense fallback={<Loader />}>
                <ProfilePage />
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
                children={
                  <div style={{ minHeight: 200, fontSize: 32 }}>TEST MODAL</div>
                }
              />
            }
          />
        </Routes>
      )}
    </>
  );
};

export default App;
