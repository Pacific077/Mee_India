import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CatStateProvider from './context/CatStateProvider';
import UserInfoProvider from './context/UserInfo/UserInfoProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CatStateProvider>
      <UserInfoProvider>

    <App />
      </UserInfoProvider>
    </CatStateProvider>
  </React.StrictMode>
);

