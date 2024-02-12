import Navbar from "./UiComponents/Navbar";
import Search from "./UiComponents/SearchBar";
import ChatroomBlock from "./UiComponents/ChatroomBlock";
import { useEffect } from "react";
import { useCurrentUserContext } from "./lib/context/currentUserContext";

export default function Chats() {
  const searchType = "Search Messages";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { currentUser } = useCurrentUserContext();
  // const {profilePicture} = currentUser
  // get current user
  // get find all chat where currentUser is sender
  // get chat with eager loading for listing
  // if listing sellerId == currentUser
  // do css or html to mark that the chatroom block is a room where currentUser.id is sellerId

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
