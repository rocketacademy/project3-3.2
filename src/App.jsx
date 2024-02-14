import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
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
              <SingleListing />
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}
