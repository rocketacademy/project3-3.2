import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../lib/constants";
import axios from "axios";

export default function LargeListingPreviewCard(props) {
  const [listingData, setListingData] = useState({});
  const [loading, setLoading] = useState(true);

  const { listingId } = props;

  const getListingData = async () => {
    const listingData = await axios.get(`${BACKEND_URL}/listings/${listingId}`);
    console.log(listingData.data);
    setListingData(listingData.data);
  };
  useEffect(() => {
    getListingData();
  }, []);
  useEffect(() => {
    if (listingData.listing) setLoading(false);
  }, [listingData]);

  const navigate = useNavigate();

  return (
    <>
      <div className=" mt-2 ">
        {loading ? (
          <div className="h-full w-full flex justify-center items-center">
            <span className="loading loading-spinner text-[#6962AD]/60 loading-lg"></span>
          </div>
        ) : (
          <>
            <hr />
            <div onClick={() => navigate(`/listing/${listingId}`)}>
              <h2 className="font-bold leading-10 mt-4 text-2xl">
                {listingData.listing.title}
              </h2>
              <h3 className="font-bold leading-10 mb-2 text-xl">
                ${listingData.listing.price}
              </h3>
            </div>
            <div className="">
              <Carousel imgArr={listingData.images} />
              <div className="h-10"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
