import ListingPreviewCard from "./UiComponents/ListingPreviewCard";
import Navbar from "./UiComponents/Navbar";
import { useEffect } from "react";
export default function Likes() {
  

// GET REQ FOR ARR OF LISTING, MAP AND PASS PROPS INTO LISTING PREVIEW CARD 
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="h-screen mx-4 mt-4">
        <div className="flex flex-row items-center w-full justify-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#6962AD"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <h2 className="font-bold">Likes</h2>
        </div>
        <hr />
        <div className="w-full flex flex-wrap gap-4 justify-center mt-4">
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
        </div>
        <div className=" h-20"></div>
        <Navbar />
      </div>
    </>
  );
}
