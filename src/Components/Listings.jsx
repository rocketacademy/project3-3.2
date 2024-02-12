import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./Constants";
import { Link } from "react-router-dom";

export default function Listings({ userId }) {
  const queryClient = useQueryClient();

  const fetcher = async (url) => (await axios.get(url)).data;
  //Retrieve all the listings
  const listings = useQuery({
    queryKey: ["listings", `${BASE_URL}/listings`],
    queryFn: () => fetcher(`${BASE_URL}/listings`),
  });
  //Retreive all watches to generate a list of watches to fill MUI Select Checkmarks to like and unlike
  const watches = useQuery({
    queryKey: ["watches", `${BASE_URL}/watches`],
    queryFn: () => fetcher(`${BASE_URL}/watches`),
  });
  //Retrieve the current user's liked watches
  const wishlist = useQuery({
    queryKey: ["wishlist", `${BASE_URL}/users/${userId}/wishlist`],
    queryFn: () => fetcher(`${BASE_URL}/users/${userId}/wishlist`),
  });

  const putRequest = async (url, data) => await axios.put(url, data);
  //Updates the watches in user wishlist
  const { mutate } = useMutation({
    mutationFn: (formData) =>
      putRequest(`${BASE_URL}/users/${userId}/wishlist`, formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["wishlist", `${BASE_URL}/users/${userId}/wishlist`],
      }),
  });

  //List out listings in the map function with listing.title, listing.starting_bid, listing.buyout_price, listing.watch.brand, listing.watch.model, and the image with listing.image_link, and a countdown to listing.ending_at. Use MUI Components and MUI Layout to help. (High priority)

  //Use MUI Select Checkmarks and React Hook Forms to make a dropdown of watches to like and unlike (Low priority)

  //Add functionality to filter by liked watches (Low Priority)

  //Add useEffect for MUI Snackbar for notifying liked watches when listed after socket.io is set up (Low priority)

  return (
    <>
      {listings.data?.map((listing) => (
        <div key={listing.id}>
          <Link to={`/listings/${listing.id}`}></Link>
        </div>
      ))}
    </>
  );
}
