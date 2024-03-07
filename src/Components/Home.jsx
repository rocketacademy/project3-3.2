import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "./Constant";
import axios from "axios";

export default function Home() {
  const fetcher = async (url) => (await axios.get(url)).data;

  //retrieve all feeds
  const feeds = useQuery({
    queryKey: ["feeds"],
    queryFn: () => fetcher(`${BASE_URL}/feed`),
  });

  console.log(feeds.data);
}
