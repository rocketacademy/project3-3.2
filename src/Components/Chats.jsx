import Navbar from "./UiComponents/Navbar";
import Search from "./UiComponents/SearchBar";
import ChatroomBlock from "./UiComponents/ChatroomBlock";
import { useEffect } from "react";
import { useCurrentUserContext } from "./lib/context/currentUserContext";

// import { Server } from "socket.io";

export default function Chats() {
  const searchType = "Search Messages";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { currentUser } = useCurrentUserContext();
  // const {profilePicture} = currentUser

  useEffect(() => {
    // socket = io(`${BACKEND_URL}`);
    // socket.emit("setup", user);
    // socket.on("connnection", () => setSocketConnected(true));
    console.log(currentUser);
  }, []);

  return (
    <>
      <div className="h-screen mx-4 mt-4">
        <div className="flex flex-row items-center">
          <img
            className="h-10 w-10 rounded-full object-cover object-center"
            src={currentUser.profilePicture}
            alt=""
          />
          <h1 className="font-semibold text-xl ml-2">Messages</h1>
        </div>
        <Search searchType={searchType} />
        <div className="flex flex-col">
          <ChatroomBlock />
          <ChatroomBlock />
          <ChatroomBlock />
          <ChatroomBlock />
          <ChatroomBlock />
        </div>

        <Navbar />
      </div>
    </>
  );
}
