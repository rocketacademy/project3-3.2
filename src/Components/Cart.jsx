import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function Cart({ userId }) {
  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve all items in cart
  const cartItems = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => fetcher(`${BASE_URL}/cart/${userId}`),
  });
  console.log(cartItems.data);

  //calculating price
  const totalPrice =
    cartItems?.data?.reduce((total, item) => {
      return total + item.basket.discountedPrice * item.stock;
    }, 0) || 0;
  console.log(totalPrice);

  //post request for stripe payment
  const postRequest = async (url, data) => await axios.post(url, data);
  const { mutate: pay } = useMutation({
    mutationFn: () =>
      postRequest(`${BASE_URL}/pay`, {
        totalPrice: totalPrice,
        buyerId: userId,
      }),
    onSuccess: (res) => (window.location = res.data.url),
  });

  return (
    <>
      {cartItems.data && cartItems.data.length > 0 ? (
        <li>Total:${totalPrice}</li>
      ) : (
        <div>Your cart is empty</div>
      )}
      <button onClick={() => pay()}>Checkout</button>
    </>
  );
}
