import React from 'react';
import ReactDOM from 'react-dom/client';

import Deriv, { useAuthorize, useSubscribe } from '@deriv-experiments/react'

const AppsPage = () => {
  const authorize = useAuthorize();
  const apps = useSubscribe({
    app_list: 1
  });

  return (
    <div>
      <h1>Apps</h1>

      {authorize
        ? (
          <>
            Logged in as {' '}
            <strong>{authorize.email}</strong>
          </> 
        )
        : (
          <button onClick={Deriv.login}>Login</button>
        )
      }

      <ul>
        <li><a href="/">Dashboard</a></li>
        <li>Apps</li>
        <li><a href="/reports/">Reports</a></li>
        <li><a href="/debug/">Debug</a></li>
      </ul>

      <h2>My Apps</h2>
      <ul>
        {apps?.app_list?.map(app => {
          return (
            <li key={app.app_id}>
              <strong>{app.name}</strong>
              <br />
              {app.verification_uri}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <AppsPage />
);
