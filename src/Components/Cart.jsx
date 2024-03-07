import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function Cart(userId) {
  const fetcher = async (url) =>
    (await axios.get(`${url}?userId=${userId}`)).data;

  //retrieve all items in cart
  const cartItems = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => fetcher(`${BASE_URL}/cart/${userId}`),
  });
}
