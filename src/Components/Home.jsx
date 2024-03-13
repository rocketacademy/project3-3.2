import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const fetcher = async (url) => (await axios.get(url)).data;

  // retrieve all feeds
  const feeds = useQuery({
    queryKey: ["feeds"],
    queryFn: () => fetcher(`${BASE_URL}/feed`),
  });
  console.log("feeds", feeds, feeds.data);

  // retrieve seller logo and name

  // like function
  const handleLike = (userId) => {
    // implement like functionality here
    console.log(`${userId}: liked`);
  };

  // comment function
  const [comment, setComment] = useState("");
  const handleComment = (userId) => {
    // implement comment functionality here
    console.log(`${userId}: ${comment}`);
    setComment("");
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* title */}
      <div className="text-4xl flex justify-center">
        <div>
          <p className="text-[#E55555] font-bold">Food</p>
        </div>
        <div>
          <p className="text-[#9EB97D] italic">Rescue</p>
        </div>
      </div>
      {/* favorites */}
      <Link to={`/favorites`}>
        <button className="fixed top-8 right-8 p-2">
          <img src="favorites.png" alt="favorites" className="h-8 w-8" />
        </button>
      </Link>
      {feeds?.data?.map((feed) => (
        <div
          key={feed.id}
          className="bg-[#EFEEDE] rounded-lg shadow p-4 relative"
        >
          {/* render seller photo and name */}
          <img src={feed.photo} alt="feed" className="w-full mb-4" />
          <p className="text-s font-light text-left mb-2">{feed.content}</p>
          <p className="text-gray-500 text-xs font-light text-left mb-2">
            {feed.createdAt}
          </p>
          <div className="flex justify-start">
            {/* render likes */}
            <button onClick={() => handleLike(feed.id)}>
              <img src="like.png" alt="like" className="h-10 w-10" />
            </button>
          </div>
          {/* render comment */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleComment(feed.id);
            }}
            className="flex items-center"
          >
            <input
              type="text"
              value={comment}
              onChange={handleInputChange}
              placeholder="Write a comment..."
              className="border border-gray-300 rounded-md p-2 mt-2 flex-grow mr-2"
            />
            <button
              type="submit"
              className="bg-[#F59F50] py-2 px-4 rounded-md flex items-center"
            >
              <img src="send.png" alt="send" className="h-8 w-8" />
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
