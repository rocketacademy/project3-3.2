import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constants";

export default function Home(axios) {
  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve all feeds
  const { data: feeds } = useQuery({
    queryKey: ["feeds"],
    queryFn: () => fetcher(`${BASE_URL}/feed`),
  });
}
