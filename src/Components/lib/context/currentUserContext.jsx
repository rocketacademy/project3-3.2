import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import { useNavigate } from "react-router-dom";


const CurrentUserContext = createContext();

export function CheckCurrentUser({ children }) {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState({});
  const { user, isAuthenticated } = useAuth0();
  const findOrCreateCurrentUser = () => {
    if ((isAuthenticated, user)) {
      axios
        .post(`${BACKEND_URL}/users`, {
          email: user.email,
        })
        .then((res) => {
          console.log(res.data);
          const userData = res.data
          setCurrentUser(userData);
          if(!userData.username){
            navigate(`/edit-profile`)
          }
        })
    }
  };

  useEffect(() => {
    findOrCreateCurrentUser();
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
export const useCurrentUserContext = () => {
  return useContext(CurrentUserContext);
};