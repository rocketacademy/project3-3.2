import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function FoodDetail() {
  const params = useParams();
  const fetcher = async (url) => (await axios.get(url)).data;

  const baskets = useQuery({
    queryKey: ["basket", `${BASE_URL}/category/${params.basketId}`],
    queryFn: () => fetcher(`${BASE_URL}/category/${params.basketId}`),
    refetchInterval: 10000,
  });
  console.log("baskets", baskets, baskets.data);

  return (
    <>
      <Link to="/search" className="absolute top-0 left-0 p-4">
        &larr; Back
      </Link>
      {baskets?.data?.map((basket) => (
        <div key={basket.id} className="bg-white p-4 shadow rounded mb-4">
          <img src={basket.photo} alt={basket.title} />
          <p>{basket.title}</p>
          <p>Pick-up start time: {basket.pickupStartTime}</p>
          <p>Pick-up end time: {basket.pickupEndTime}</p>
          <p>$ {basket.originalPrice}</p>
          <p>$ {basket.discountedPrice}</p>
          <p>{basket.description}</p>
          <p>{basket.allergens}</p>
          <p>{basket.stock} left</p>
          <p>{basket.weightPerUnit} weight per unit</p>
        </div>
      ))}
    </>
  );
}
