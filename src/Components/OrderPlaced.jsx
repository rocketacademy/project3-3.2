import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function OrderPlaced({ userId }) {
  const navigate = useNavigate();
  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve latest order info
  const latestOrder = useQuery({
    queryKey: ["latestOrder"],
    queryFn: () => fetcher(`${BASE_URL}/order/latest/${userId}`),
  });
  console.log(latestOrder.data);

  let ghgSavings = 0;

  ghgSavings = latestOrder.data?.orderedItems?.reduce((total, item) => {
    const basket = item.basket;
    return total + item.stock * basket.weightPerUnit * 3.8;
  }, 0);
  console.log(ghgSavings);

  return (
    <div>
      <p>Payment Successful!</p>
      <p>You&apos;ve helped save {ghgSavings} g of GHG emissions!</p>
      <button onClick={() => navigate(`/profile`)}> See Order</button>
    </div>
  );
}
