import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BASE_URL } from "./Constants";

export default function Search(axios) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve all sellers
  const { data: sellers } = useQuery({
    queryKey: ["sellers", selectedCategoryId],
    queryFn: () =>
      fetcher(`${BASE_URL}/category/${selectedCategoryId}/sellers`),
    enabled: !!selectedCategoryId,
  });

  //change categoryId with button click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <button onClick={() => handleCategoryClick(1)}>Bakery</button>
      <button onClick={() => handleCategoryClick(2)}>Restaurant</button>
      <button onClick={() => handleCategoryClick(3)}>Supermarket</button>

      {sellers.map((seller) => (
        <div key={seller.id}>
          <li>{seller.name}</li>
          <img src={seller.photo} alt={seller.name} />
          <ul>
            {seller.baskets.map((basket) => (
              <div
                key={basket.id}
                className="flex items-center p-4 bg-white shadow rounded mb-4"
              >
                <img
                  src={basket.photo}
                  alt={basket.title}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h2 className="font-bold text-lg">{basket.title}</h2>
                  <p className="text-gray-500">{basket.price}</p>
                  <p className="text-gray-500">{basket.stock} left</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
