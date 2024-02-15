import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "./Constants";
import Button from "@mui/material/Button";
import { LineChart } from "@mui/x-charts/LineChart";

export default function SingleListing() {
  const params = useParams();

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

  console.log(priceHistory.data);

  if (listing?.isLoading) {
    return (
      <>
        Loading... <iconify-icon icon="line-md:loading-twotone-loop" />
      </>
    );
  }

  if (listing?.isError) {
    return <>Error: {listing.error.message}</>;
  }

  //Show price history with MUI X Line Chart
  //Show listing information
  priceHistory?.data?.sort(
    (a, b) => new Date(a.transacted_at) - new Date(b.transacted_at)
  );
  // const pairs = priceHistory?.data?.map((item) => ({
  //   price: item.price,
  //   transactedAtDate: item.transacted_at.split("T")[0],
  // }));
  // console.log(pairs);

  const prices = priceHistory?.data?.map((item) => item.price).reverse();
  const dates = priceHistory?.data
    ?.map((item) => new Date(item.transacted_at))
    .reverse();
  console.log(prices);
  console.log(dates);

  return (
    <>
      <div className="product-info">
        {/* <img src={listing.data?.image_link} alt="Listing" /> */}
        {listing.data.title}
      </div>
      <div className="auction-info">
        <p>@PhyllisP made a bid of</p>
        <p>$150,000</p>
        <p>25 seconds ago</p>
        <Button variant="contained">BID NOW</Button>
        <Button variant="contained">BUYOUT</Button>
        <p>Auction Ends In</p>
        <p>04 Days 11 Hours 16 Minutes</p>
      </div>
      <div className="line-chart">
        {!!priceHistory.data && (
          <LineChart
            xAxis={[
              {
                data: dates,
                scaleType: "time",
                valueFormatter: (value) =>
                  `${value.getFullYear()}-${
                    value.getMonth() + 1
                  }-${value.getDate()}`,
              },
            ]}
            series={[
              {
                data: prices,
              },
            ]}
            width={350}
            height={270}
          />
        )}
      </div>
    </>
  );
}
