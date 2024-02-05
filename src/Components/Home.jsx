import { useNavigate } from "react-router-dom";
import Navbar from "./UiComponents/Navbar";


export default function Home() {
	const navigate = useNavigate()
  return (
    <>
      <div className="h-screen relative">
        <div className=" h-40 w-full overflow-hidden">
          <img
            className="object-cover object-center"
            src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h1 className="text-center font-bold antialiased underline">For you</h1>

        <button
          onClick={() => navigate("/add-listing")}
          className="btn w-28 btn-accent absolute bottom-16 right-5"
        >
          {" "}
          + Sell
        </button>

        <Navbar />
      </div>
    </>
  );
}
