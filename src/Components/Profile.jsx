import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function Profile({ userId }) {
  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve all orders
  //for each order, show food title, photo, stock(that the user has bought)pickupstarttime, endtime, seller address
  const orders = useQuery({
    queryKey: ["orders"],
    queryFn: () => fetcher(`${BASE_URL}/order/${userId}`),
  });

  console.log(orders.data);
}
