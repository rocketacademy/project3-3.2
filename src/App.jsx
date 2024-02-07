import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import ProfileLogin from "./Components/ProfileLogin";
import NavBar from "./Components/NavBar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <div>
        <img
          width="200"
          height="200"
          src="https://img.icons8.com/bubbles/200/watches-front-view--v2.png"
          alt="watches-front-view--v2"
        />
      </div>
      <h1>Watch Out</h1>
      <div className="card">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: import.meta.env.VITE_AUDIENCE,
        }}>
        <QueryClientProvider client={queryClient}>
          <ProfileLogin />
        </QueryClientProvider>
      </Auth0Provider>
      <NavBar />
    </>
  );
}
