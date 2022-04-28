import React, {FC, ReactElement} from 'react';
import {useLocation, Navigate} from 'react-router-dom';
//--------------------------------------------------------------------------------

const RequireAuth: FC<{children: ReactElement}> = ({children}) => {
  const location = useLocation();
  const auth = true; //hardcode fake auth

  return !auth ? <Navigate to="/login" state={{from: location}} /> : children;
};

export default RequireAuth;
