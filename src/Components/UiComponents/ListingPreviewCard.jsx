import { useNavigate } from "react-router-dom";

//TODO: MAP PROFILE AND LISTING UIDs FOR ONCLICKS
export default function ListingPreviewCard() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-40 flex flex-col listing-card-preview box-border border-2 border-black shadow-[4px_4px_0px_0px_#1a202c] rounded-lg">
        <div className="h-8  flex flex-row rounded-t-lg">
          <img
            onClick={() => navigate("/profile")}
            className="w-8 rounded-full flex-initial"
            src="https://pbs.twimg.com/profile_images/1009990947533348864/Smwp1Cia_400x400.jpg"
          ></img>
          <h2
            onClick={() => navigate("/profile")}
            className="font-bold ml-2 flex-1"
          >
            Reflem
          </h2>
          {/* Dropdown */}

          <div className="dropdown dropdown-bottom dropdown-end flex-initial">
            <div tabIndex={0} role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28"
            >
              <li>
                <a>Like</a>
              </li>
              <li>
                <a>Report</a>
              </li>
              <li>
                <a>Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={() => navigate("/listing")} className=" ">
          <img
            className="size-40 object-cover object-center border-black border-t-2 border-b-2"
            src="https://acrotokyo.itembox.design/product/005/000000000595/000000000595-01-l.jpg?t=20240205132947"
            alt=""
          />
        </div>
        <div className=" h-10 rounded-b-lg flex flex-row">
          <p className="font-bold flex-1 text-sm  align-middle ">
            Kuromi Hoodie
          </p>
          <div className="bg-black">
            <p className="text-white font-bold flex-initial align-middle mx-1">
              $230
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
