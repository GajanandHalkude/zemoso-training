import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import {domain, clientId,URL_DOMAIN} from './constants'
import { Provider } from 'react-redux';
import  store  from './services/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store} >
  <Auth0Provider
  domain={domain}
  clientId={clientId}
    authorizationParams={{
      redirect_uri:`${URL_DOMAIN}dashboard`
    }}
  >
    <App />
 ,
  </Auth0Provider>
  </Provider>
);