import "./App.css";
import AuthPage from "./Components/AuthPage";
import Cart from "./Components/Cart";
import Favorites from "./Components/Favorites";
import FoodDetail from "./Components/FoodDetail";
import Home from "./Components/Home";
import OrderPlaced from "./Components/OrderPlaced";
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";
import SellerProfile from "./Components/SellerProfile";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  //will import isAuthenticated from auth0 later
  const isAuthenticated = true;

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <AuthPage />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
    },
    {
      path: "/favorites",
      element: (
        <ProtectedRoute>
          <Favorites axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
    },
    {
      path: "/search",
      element: (
        <ProtectedRoute>
          <Search axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
      children: [
        {
          path: ":basketId",
          element: <FoodDetail axios={axios} />,
        },
        {
          path: ":sellerId",
          element: <SellerProfile axios={axios} />,
        },
      ],
    },
    {
      path: "/cart",
      element: (
        <ProtectedRoute>
          <Cart axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
    },
    {
      path: "/order",
      element: (
        <ProtectedRoute>
          <OrderPlaced axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile axios={axios} />
          <NavBar />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
