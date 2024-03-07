import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function FoodDetail({ userId }) {
  const params = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const fetcher = async (url) => (await axios.get(url)).data;

  //get the basket info
  const basket = useQuery({
    queryKey: ["basket", `${BASE_URL}/category/${params.basketId}`],
    queryFn: () => fetcher(`${BASE_URL}/category/${params.basketId}`),
    refetchInterval: 10000,
  });
  console.log(basket.data);

  //add a basket to cart
  //how about the edge case where the user goes back and wants to add the same item to basket through fooddetail?
  const postRequest = async (url, data) => await axios.post(url, data);
  const { mutate } = useMutation({
    mutationFn: (formData) => postRequest(`${BASE_URL}/cart`, formData),
    onSuccess: (res) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", `${BASE_URL}/cart`],
      });
      queryClient.setQueryData(
        ["cart", `${BASE_URL}/cart${res.data.buyer_id}`],
        res.data
      );
      navigate(`/cart`);
    },
  });

  const handleAddToCart = () => {
    const formData = {
      buyer_id: userId,
      basket_id: params.basketId,
      stock: 1,
    };
    mutate(formData);
  };

  return (
    <>
      <button onClick={handleAddToCart}>Reserve</button>
    </>
  );
}
