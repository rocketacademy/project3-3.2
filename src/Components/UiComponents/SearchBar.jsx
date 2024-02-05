export default function MessageSearch(props){
  let { searchType } = props
  return (
    <form>
      <div className=" rounded-full h-12 flex flex-row bg-slate-300 mt-10 items-center">
        <input
          className=" ml-4 border-0 h-8 flex-1 outline-none p-4 bg-slate-300 caret-white text-center font-semibold"
          type="text"
          placeholder={searchType}
        />
        {/* SUBMIT */}
        <button
          type="submit"
          className="bg-[#83C0C1] h-9 rounded-full w-9 mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

