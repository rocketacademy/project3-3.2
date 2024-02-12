import { useNavigate } from "react-router-dom";
import Navbar from "./UiComponents/Navbar";
import ListingPreviewCard from "./UiComponents/ListingPreviewCard";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { BACKEND_URL } from "./lib/constants";

export default function Home() {
  const [listings, setListings] = useState([]);
  // const [page, setPage] = useState(1);
  // const [error, setError ] = useState(false)
  // const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { user, isAuthenticated } = useAuth0();

  const getListings = async () => {
    // const listings = await axios.get(`${BACKEND_URL}/listings/paginated?page=${page}`);
    // setListings(listings.data.listings);
    const listings = await axios.get(`${BACKEND_URL}/listings`)
    setListings(listings.data)
  };
  useEffect(() => {
    setLoading(true)
    // setError(false)
    getListings();
  }, []);

  useEffect(()=>{
    console.log(listings)
    if (listings.length>0)setLoading(false)
  },[listings])

  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <span className="loading loading-spinner text-[#6962AD]/60 loading-lg"></span>
        </div>
      ) : (
        <div className="h-screen relative">
          <div className=" h-40 w-full overflow-hidden">
            <img
              className="object-cover object-center"
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <h1 className="text-center font-bold antialiased underline">
            For you
          </h1>
          <div className="w-full flex flex-wrap gap-4 justify-center mt-4">
            {listings
              .slice()
              .reverse()
              .map((listing) => (
                <ListingPreviewCard
                  key={listing.id}
                  listingId={listing.id}
                  title={listing.title}
                  price={listing.price}
                  image={listing.listing_images}
                  seller={listing.seller.username}
                  profilePicture={listing.seller.profilePicture}
                />
              ))}
          </div>
          <div className=" h-20"></div>
          <button
            onClick={() => navigate("/add-listing")}
            className={
              isAuthenticated
                ? "btn w-28 btn-accent fixed bottom-16 right-5 z-19 opacity-80 hover:opacity-100 transition ease-in"
                : "hidden"
            }
          >
            {" "}
            + Sell
          </button>

          <Navbar />
        </div>
      )}
    </>
  );
}
