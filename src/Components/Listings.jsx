import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./Constants";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  const cardColors = ["#A8D0E6", "#374785", "#f76c6c", "#d4b483", "#24305E"];
  console.log(listings.data);
  console.log(listings);

  return (
    <>
      <Grid container spacing={0}>
        {listings.data?.map((listing, index) => (
          <Grid item xs={index % 3 === 0 ? 12 : 6} key={listing.id}>
            <Link to={`/listings/${listing.id}`}>
              <Card
                sx={{
                  backgroundColor: cardColors[index % cardColors.length],
                  ":hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: 0,
                    alignItems: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& h1": {
                      textAlign: "center",
                      fontSize: index % 3 !== 0 ? "0.75rem" : "1.25rem",
                    },
                  }}
                >
                  <h1>Auction Time Left:</h1>
                  <h1>04 Days 11 Hours 16 Minutes</h1>
                </Box>

                <CardMedia
                  component="img"
                  image={listing.image_link}
                  alt={listing.title}
                  sx={{ width: "60%", display: "block", objectFit: "cover" }}
                ></CardMedia>

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "& h2": {
                      textAlign: "center",
                      fontSize: index % 3 !== 0 ? "0.75rem" : "1rem",
                    },
                  }}
                >
                  <h2>{listing.title}</h2>
                  <h2>Starting at {listing.starting_bid}</h2>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
