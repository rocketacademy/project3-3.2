import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Prototyping from "./Components/Prototyping";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";
import EditProfile from "./Components/EditProfile";
import Chats from "./Components/Chats";
import Chatroom from "./Components/Chatroom";
import AddListing from "./Components/AddListing";
import Listing from "./Components/Listing";
import Likes from "./Components/Likes";
import AddListingPreview from "./Components/AddListingPreview";
import Checkout from "./Components/Checkout";
import { CheckCurrentUser } from "./Components/lib/context/currentUserContext";


export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: `/profile/`,
      //will need the unique ID of profile
      children: [
        {
          path: ":paramUsername",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/chats",
      element: <Chats />,
    },
    {
      path: "/chat/",
      children: [
        {
          path: ":uid",
          element: <Chatroom />,
        },
      ],
    },
    {
      path: "/likes",
      element: <Likes />,
    },
    //listing here will need a path that directs it to individual listing via listingId
    {
      path: "/listing/",
      children: [
        {
          path: ":uid",
          element: <Listing />,
        },
      ],
    },
    {
      path: "/add-listing",
      element: <AddListing />,
    },
    {
      path: "/preview-listing",
      element: <AddListingPreview />,
    },
    {
      path: "/edit-profile",
      element: <EditProfile />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/prototyping",
      element: <Prototyping />,
    },
  ]);
  return (
    <CheckCurrentUser>
      <RouterProvider router={router} />
    </CheckCurrentUser>
  );
}
