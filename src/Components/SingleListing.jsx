import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm, Controller } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { BASE_URL, SOCKET_URL } from "./Constants";

export default function SingleListing({ userId }) {
  const [displayBid, setDisplayBid] = useState(0);
  const socket = io(`${SOCKET_URL}`);
  const queryClient = useQueryClient();
  const params = useParams();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const fetcher = async (url) => (await axios.get(url)).data;
  const listing = useQuery({
    queryKey: ["listing", `${BASE_URL}/listings/${params.listingId}`],
    queryFn: () => fetcher(`${BASE_URL}/listings/${params.listingId}`),
  });
  const watch = useQuery({
    queryKey: ["watch", `${BASE_URL}/watches/${listing?.data?.watch_id}`],
    queryFn: () => fetcher(`${BASE_URL}/watches/${listing?.data?.watch_id}`),
    enabled: listing.isSuccess,
  });
  const priceHistory = useQuery({
    queryKey: [
      "priceHistory",
      `${BASE_URL}/watches/${listing?.data?.watch_id}/historicPrices`,
    ],
    queryFn: () =>
      fetcher(`${BASE_URL}/watches/${listing?.data?.watch_id}/historicPrices`),
    enabled: listing.isSuccess,
  });
  const highestBid = useQuery({
    queryKey: ["highestBid", `${BASE_URL}/listings/${params.listingId}/bid`],
    queryFn: () => fetcher(`${BASE_URL}/listings/${params.listingId}/bid`),
  });

  const initialBid =
    highestBid?.data?.current_bid ?? listing?.data?.starting_bid;

  const putRequest = async (url, data) => await axios.put(url, data);
  const { mutate } = useMutation({
    mutationFn: (formData) =>
      putRequest(`${BASE_URL}/listings/${params.listingId}/bid`, formData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [
          "highestBid",
          `${BASE_URL}/listings/${params.listingId}/bid`,
        ],
      }),
  });

  const onSubmit = (formData) => {
    const submitData = { ...formData, userId, listingId: params.listingId };
    mutate(submitData);
    socket.emit("submitBid", submitData);
    setDisplayBid(submitData.currentBid);
    console.log(submitData);
    reset();
  };

  useEffect(() => {
    socket.emit("joinRoom", params.listingId);
    socket.on("newBid", (bid) => setDisplayBid(bid));
    return () => socket.disconnect();
  }, [params.listingId, queryClient, socket]);

  if (listing.isLoading) {
    return (
      <>
        Loading... <iconify-icon icon="line-md:loading-twotone-loop" />
      </>
    );
  }

  if (listing.isError) {
    return <>Error: {listing.error.message}</>;
  }

  //Show price history with MUI X Line Chart
  //Show listing information

  return (
    <>
      <div>Current Bid: {displayBid || initialBid}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="currentBid"
            control={control}
            defaultValue={(displayBid || initialBid) + 100}
            rules={{
              required: "Enter Bid",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter only numbers",
              },
              validate: {
                higherThanCurrentBid: (value) =>
                  Number(value) >= Number(displayBid || initialBid) + 100 ||
                  "Enter an amount at least $100 higher than current bid",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                id="currentBid"
                label="Bid"
                variant="filled"
                error={!!errors.currentBid}
                helperText={errors?.currentBid?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
                }}
              />
            )}
          />
        </div>
        <Button type="submit" variant="contained">
          Submit Bid
        </Button>
      </form>
    </>
  );
}
