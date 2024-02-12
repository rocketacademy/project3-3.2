import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";


export default function LargeListingPreviewCard(props) {

const { title, price, id, images } = props

const imgArr = images.map(image=> image.url) 

  const navigate = useNavigate();

  return (
    <>
      <article className=" mt-2 ">

            <hr />
            <div onClick={() => navigate(`/listing/${id}`)}>
              <h2 className="font-bold leading-10 mt-4 text-2xl">
                {title}
              </h2>
              <h3 className="font-bold leading-10 mb-2 text-xl">
                ${price}
              </h3>
            </div>
            <div className="">
              <Carousel imgArr={imgArr} />
              <div className="h-10"></div>
            </div>
  
      </article>
    </>
  );
}
