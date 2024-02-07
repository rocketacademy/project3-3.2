import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ph665ddgzy1bp5ra.us.auth0.com"
    clientId="MwiR6g6NZKI0ruiOb9ZKImESiOn02Wll"
    authorizationParams={{
      redirect_uri: window.location.origin,
      scope:
        "read:current_user update:current_user_metadata openid profile email",
    }}
  >
    <App />
  </Auth0Provider>
);
