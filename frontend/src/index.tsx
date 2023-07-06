import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import App from "./App";
import {domain, clientId} from './constants'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
  </Auth0Provider>
);