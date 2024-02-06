import { useNavigate } from "react-router-dom";
import Carousel from "./UiComponents/Carousel";
import ReviewBlock from "./UiComponents/ReviewBlock";
import { useEffect } from "react";

export default function Listing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },[]);

  // JUST DUMMY DATA. ONCE BACKEND CONTROLLERS ARE SETUP, GET REQ FOR ARR OF IMAGES FROM BACKEND FOR THE LISTING
  let imgArr = [
    "https://i.pinimg.com/564x/17/4e/4c/174e4c8c81c915dbf7362a663fbfe294.jpg",
    "https://i.pinimg.com/564x/73/65/9a/73659ae23acd89daefe7e55be100d598.jpg",
    "https://i.pinimg.com/564x/d3/4c/49/d34c494a0ca5e7712516512e1b22f585.jpg",
    "https://i.pinimg.com/564x/d7/1c/af/d71cafc8b6c94dd3f40ae3cb84047ccc.jpg",
  ];
  return (
    <>
      <div className="h-screen mx-4 mt-4">
        <header className="mx-4 mt-2 mb-4">
          <div className="h-10 w-full flex flex-row items-center">
            <div
              onClick={() => navigate(-1)}
              className="flex flex-row items-center mb-2 px-4 bg-[#83C0C1] h-full rounded-full  cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <h2 className="font-bold ml-4 flex-1 text-white test">Back</h2>
            </div>{" "}
          </div>
          <hr />
        </header>

        <h2 className="font-bold leading-10 mt-4 text-2xl">
          ARTIST COMMISSION
        </h2>
        <h3 className="font-bold leading-10 mt-2 mb-4 text-xl">$40</h3>
        <Carousel imgArr={imgArr} />
        <div className="flex flex-row items-center gap-5 py-4">
          <img
            src="https://i.pinimg.com/564x/8e/c8/22/8ec8220d8f0d181d49adff19f98632b2.jpg"
            alt=""
            className="h-14 w-14 rounded-full object-cover object-center"
          />
          <h3 className="font-bold text-xl">Felicia</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#83C0C1"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="font-bold text-xl pb-2">Description</h2>
        <p className="text-sm pb-8">
          Hi! I am a digital artist and am currently taking commissions. HMU and
          send me what you have in mind that you&apos;d like to bring to life!{" "}
        </p>
        <hr />
        <h2 className="font-bold text-xl my-4">Reviews</h2>
        <div className="pt-2 pb-16">
          <ReviewBlock />
          <ReviewBlock />
          <ReviewBlock />
        </div>
        <button
          onClick={() => navigate("/chat/1")}
          className="btn w-28 bg-[#6C22A6] text-white outline-none border-none fixed bottom-8 right-5 z-19 opacity-80 hover:opacity-100 transition ease-in"
        >
          {" "}
          Order
        </button>
      </div>
    </>
  );
}
