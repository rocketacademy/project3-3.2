import Navbar from "./UiComponents/Navbar";
import Search from "./UiComponents/SearchBar";
export default function Explore() {
  const searchType = "Search";
  return (
    <>
      <div className="h-screen mx-4 mt-4">
        <div className="mb-4">
          <Search searchType={searchType} />
        </div>
        <hr />
        <h2 className="font-semibold text-lg text-black/80 mt-4 text-center">Categories</h2>

{/* GET LIST OF CATEGORIES AND MAP THEM HERE */}

        <div className="flex flex-row items-center justify-center flex-wrap w-full gap-2 mt-2">
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Blender
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Crochet
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Oil Painting
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Embroidery
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Photography
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            Pottery
          </button>
          <button className=" bg-[#6C22A6]/60 text-white outline-none border-none  opacity-80 hover:opacity-100 transition ease-in py-1 px-2 rounded-full">
            UI Design
          </button>
        </div>
        <Navbar />
      </div>
    </>
  );
}
