import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className=" fixed bottom-12 max-w-full gap-x-2 gap-y-2 rounded-[var(--border-radius--menu-wrapper)] bg-[rgba(26,27,30,0.4)] border flex-col flex  p-[9px] max-sm:p-[5px] border-solid border-[#222325] transition-custom ">
      <div className="w-full gap-x-2 max-md:gap-1 gap-y-2 rounded-[var(--border-radius--menu-link)] bg-[#1a1b1e] justify-between flex overflow-auto p-3 max-sm:p-2 transition-custom">
        <button type="button" onClick={() => navigate("/")}>
          <span>Home</span>
        </button>
        <button type="button" onClick={() => navigate("/search")}>
          <span>Search</span>
        </button>
        <button type="button" onClick={() => navigate("/cart")}>
          <span>Cart</span>
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <span>Profile</span>
        </button>
      </div>
    </nav>
  );
}
