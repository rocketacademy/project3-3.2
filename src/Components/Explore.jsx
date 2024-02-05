import Navbar from "./UiComponents/Navbar";
import Search from "./UiComponents/SearchBar";
export default function Explore(){
	const searchType = "Search"
	return (
    <>
      <div className="h-screen">
        <Search searchType={searchType} />
        <Navbar />
      </div>
    </>
  );
}
