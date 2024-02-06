import Navbar from "./UiComponents/Navbar";
import Search from "./UiComponents/SearchBar"
import ChatroomBlock from "./UiComponents/ChatroomBlock";

export default function Chats() {
  const searchType = "Search Messages"
  return (
    <>
      <div className="h-screen mx-4 mt-4">
        <div className="flex flex-row items-center">
          <img className="h-10 w-10 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h1 className="font-semibold text-xl ml-2">Messages</h1>
        </div>
        <Search searchType={searchType}/>
        <div className="flex flex-col">
          <ChatroomBlock/>
          <ChatroomBlock/>
          <ChatroomBlock/>
          <ChatroomBlock/>
          <ChatroomBlock/>
        </div>

        <Navbar />
      </div>
    </>
  );
}
