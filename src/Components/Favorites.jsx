import { Link } from "react-router-dom";

export default function Favorites() {
  return (
    <>
      <Link
        to="/"
        className="absolute top-0 left-0 p-4 text-[#F59F50] font-medium"
      >
        &larr; Back
      </Link>
      {/* title */}
      <div className="text-2xl flex justify-center">
        <div>
          <p className="text-[#E55555] font-bold">Food</p>
        </div>
        <div>
          <p className="text-[#9EB97D] italic">Favorites</p>
        </div>
      </div>
      {/* render favorite sellers */}
    </>
  );
}
