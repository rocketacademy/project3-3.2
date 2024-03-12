import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function FoodDetail({ userId }) {
  const params = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const fetcher = async (url) => (await axios.get(url)).data;

  const baskets = useQuery(
    ["basket", `${BASE_URL}/category/${params.basketId}`],
    () => fetcher(`${BASE_URL}/category/${params.basketId}`),
    { refetchInterval: 10000 }
  );
  console.log("baskets", baskets, baskets.data);

  // add a basket to cart
  // how about the edge case where the user goes back and wants to add the same item to the basket through food detail?

  const postRequest = async (url, data) => await axios.post(url, data);
  const { mutate } = useMutation({
    mutationFn: (formData) => postRequest(`${BASE_URL}/cart`, formData),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", `${BASE_URL}/cart`],
      });
      queryClient.setQueryData(
        ["cartItems", `${BASE_URL}/cart/${res.data.buyer_id}`],
        res.data
      );
      navigate(`/cart`);
    },
  });

  const handleAddToCart = () => {
    console.log(params.basketId);
    const formData = {
      buyerId: userId,
      basketId: Number(params.basketId),
      stock: 1,
    };
    mutate(formData);
  };

  return (
    <>
      <Link to="/search" className="absolute top-0 left-0 p-4">
        &larr; Back
      </Link>
      {baskets.data?.map((basket) => (
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
          <button onClick={handleAddToCart}>Reserve</button>
        </div>
      ))}
    </>
  );
}
