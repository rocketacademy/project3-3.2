import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

export default function LargeListingPreviewCard() {
  // JUST DUMMY DATA. ONCE BACKEND CONTROLLERS ARE SETUP, GET REQ FOR ARR OF IMAGES FROM BACKEND FOR THE LISTING
  let imgArr = [
    "https://i.pinimg.com/564x/17/4e/4c/174e4c8c81c915dbf7362a663fbfe294.jpg",
    "https://i.pinimg.com/564x/73/65/9a/73659ae23acd89daefe7e55be100d598.jpg",
    "https://i.pinimg.com/564x/d3/4c/49/d34c494a0ca5e7712516512e1b22f585.jpg",
    "https://i.pinimg.com/564x/d7/1c/af/d71cafc8b6c94dd3f40ae3cb84047ccc.jpg",
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className=" mt-2 ">

        <hr />
        <div onClick={() => navigate(`/listing/1`)}>
          <h2 className="font-bold leading-10 mt-4 text-2xl">
            ARTIST COMMISSION
          </h2>
          <h3 className="font-bold leading-10 mt-2 mb-4 text-xl">$40</h3>
        </div>
        <div className="my-2">
          <Carousel imgArr={imgArr} />
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
}
