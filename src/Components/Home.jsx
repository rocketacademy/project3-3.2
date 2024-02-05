import { useNavigate } from "react-router-dom";
import Navbar from "./UiComponents/Navbar";
import ListingPreviewCard from "./UiComponents/ListingPreviewCard";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen relative">
        <div className=" h-40 w-full overflow-hidden">
          <img
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h1 className="text-center font-bold antialiased underline">For you</h1>
        {/* GET ALL LISTINGS AND MAP AND PASS PROPS INTO CARDS */}
        <div className="w-full flex flex-wrap gap-4 justify-center mt-4">
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
          <ListingPreviewCard />
        </div>
        <div className=" h-20"></div>
        <button
          onClick={() => navigate("/add-listing")}
          className="btn w-28 btn-accent fixed bottom-16 right-5 z-19 opacity-80 hover:opacity-100 transition ease-in"
        >
          {" "}
          + Sell
        </button>

        <Navbar />
      </div>
    </>
  );
}
