import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <Link
        to="/"
        className="absolute top-0 left-0 p-4 text-[#F59F50] font-medium"
      >
        &larr; Back
      </Link>
      {cartItems.data && cartItems.data.length > 0 ? (
        <>
          <p>Your total would be: ${totalPrice}</p>
          {/* map function */}
          {/* <p>Item in your basket: ${cartItems.data.basket.title}</p> */}
        </>
      ) : (
        <div>Your cart is empty</div>
      )}
      <br />
      <button
        className="bg-[#F59F50] text-white py-2 px-4 rounded-full"
        onClick={() => pay()}
      >
        Checkout
      </button>
    </>
  );
}
