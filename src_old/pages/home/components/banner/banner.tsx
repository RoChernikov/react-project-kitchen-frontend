import React from 'react';
interface IBaner {
  appName: string;
  token: string
}
const Banner: React.FC<IBaner> = ({ appName, token }) => {
  console.log('appName', appName);
  console.log('token', token);
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>Your community project starter pack.</p>
      </div>
    </div>
  );
};

export default Banner;