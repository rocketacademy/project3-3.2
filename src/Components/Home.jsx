import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function Home() {
  const fetcher = async (url) => (await axios.get(url)).data;

  // retrieve all feeds
  const feeds = useQuery({
    queryKey: ["feeds"],
    queryFn: () => fetcher(`${BASE_URL}/feed`),
  });
  console.log("feeds", feeds, feeds.data);

  const [comment, setComment] = useState("");

  const handleLike = (userId) => {
    // implement like functionality here
    console.log(`${userId}: Liked`);
  };

  const handleComment = (userId) => {
    // implement comment functionality here
    console.log(`${userId}: Commented`);
    console.log(`Comment: ${comment}`);
    setComment("");
  };

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-4xl flex justify-center">
        <div>
          <p className="text-[#E55555] font-bold">Food</p>
        </div>
        <div>
          <p className="text-[#9EB97D] italic">Rescue</p>
        </div>
      </div>
      <div>
        {/* new page to favorites */}
        <button className="fixed top-8 right-8 p-2">
          <img src="favorite.png" alt="favorite" className="h-8 w-8" />
        </button>
      </div>
      {feeds?.data?.map((feed) => (
        <div
          key={feed.id}
          className="bg-[#EFEEDE] rounded-lg shadow p-4 relative"
        >
          <img src={feed.photo} alt="Feed Photo" className="w-full mb-4" />
          <p className="text-s mb-2 text-left">{feed.content}</p>
          <p className="text-gray-500 text-sm text-left">{feed.createdAt}</p>
          <br />
          <div className="flex justify-start">
            <button onClick={() => handleLike(feed.id)}>
              <img src="like.png" alt="like" className="h-10 w-10" />
            </button>
          </div>
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
