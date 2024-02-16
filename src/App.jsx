import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import ProfileLogin from "./Components/Profile";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Listings from "./Components/Listings";
import SingleListing from "./Components/SingleListing";

const queryClient = new QueryClient();

export default function App() {
  const [userId, setUserId] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/listings",
      element: (
        <>
          <Outlet />
          <Listings userId={userId} />
          <NavBar userId={userId} />
        </>
      ),
      children: [
        {
          path: ":listingId",
          element: (
            <>
              <SingleListing userId={userId} />
            </>
          ),
        },
      ],
    },
    {
      path: "/profile",
      element: (
        <>
          <ProfileLogin userId={userId} setUserId={setUserId} />
          <NavBar userId={userId} />
        </>
      ),
    },
  ]);

  return (
    <>
      <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: import.meta.env.VITE_AUDIENCE,
        }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth0Provider>
    </>
  );
}
