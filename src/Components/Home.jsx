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
      <div className="text-4xl text-center">
        <p className="">Food</p>
        <p className="">Rescue</p>
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
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleLike(feed.id)}
          >
            Like
          </button>
          {/* render out message when you liked post
          and how many other users liked this */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleComment(feed.id);
            }}
          >
            <input
              type="text"
              value={comment}
              onChange={handleInputChange}
              placeholder="Write a comment..."
              className="border border-gray-300 rounded-md p-2 mt-2 w-full"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      ))}
    </div>
  );

  console.log(feeds.data);
}
