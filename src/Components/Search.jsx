import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Search() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const fetcher = async (url) => (await axios.get(url)).data;

  // retrieve all sellers
  const sellers = useQuery({
    queryKey: ["sellers", selectedCategoryId],
    queryFn: () =>
      fetcher(`${BASE_URL}/category/${selectedCategoryId}/sellers`),
    enabled: !!selectedCategoryId,
  });
  // maybe only show the sellers who have baskets?

  // change categoryId with button click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  console.log(sellers.data);

  // //get the user's location
  // const [location, setLocation] = useState(null);

  // useEffect(()=>{
  //   const getLocation=()=>{
  //     if (navigator.geolocation){
  //       navigator.geolocation.getCurrentPosition(
  //         (position)=>{
  //           const userLocation = {
  //             type: "Point",
  //             coordinates: [
  //               position.coords.longitude,
  //               position.coords.latitude,
  //             ],
  //           };
  //           setLocation(userLocation);
  //         }
  //       )
  //     }
  //   }
  // })

  return (
    <>
      <div className="flex justify-around">
        <button
          onClick={() => handleCategoryClick(1)}
          className="bg-[#EFEEDE] py-8 px-5 rounded-md flex flex-col items-center w-24 h-24"
        >
          <img src="bakery.png" alt="bakery" className="h-8 w-8" />
          <span className="mt-2">Bakery</span>
        </button>
        <button
          onClick={() => handleCategoryClick(2)}
          className="bg-[#EFEEDE] py-8 px-5 rounded-md flex flex-col items-center w-24 h-24"
        >
          <img src="restaurant.png" alt="restaurant" className="h-8 w-8" />
          <span className="mt-2">Restaurant</span>
        </button>
        <button
          onClick={() => handleCategoryClick(3)}
          className="bg-[#EFEEDE] py-8 px-5 rounded-md flex flex-col items-center w-24 h-24"
        >
          <img src="supermarket.png" alt="supermarket" className="h-8 w-8" />
          <span className="mt-2">Supermarket</span>
        </button>
      </div>
      {sellers?.data?.map((seller) => (
        <div key={seller.id}>
          <p>{seller.name}</p>
          <ul>
            {seller.baskets?.map((basket) => (
              <div
                key={basket.id}
                className="flex items-start p-4 bg-white shadow rounded mb-4"
              >
                <Link to={`/search/basket/${basket.id}`}>
                  <img
                    src={basket.photo}
                    alt={basket.title}
                    className="w-20 h-20 object-cover mr-4"
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <p className="font-semi-bold text-lg text-left">
                    {basket.title}
                  </p>
                  <p className="text-gray-500">{basket.price}</p>
                  <div className="flex justify-between">
                    <p className="text-gray-500">{basket.stock} left</p>
                    <div>
                      <p className="text-gray-500 line-through">
                        ${basket.originalPrice}
                      </p>
                      <p className="text-gray-500">${basket.discountedPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
