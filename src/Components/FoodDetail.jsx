import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FoodDetail() {
  const params = useParams();
  const fetcher = async (url) => (await axios.get(url)).data;

  const basket = useQuery({
    queryKey: ["basket", `${BASE_URL}/category/${params.basketId}`],
    queryFn: () => fetcher(`${BASE_URL}/category/${params.basketId}`),
    refetchInterval: 10000,
  });
  console.log(basket.data);
  return;
}
