function SendMessageBar() {
  return (
    <form>
      <div className=" rounded-full h-12 flex flex-row bg-slate-300 mt-10 items-center">
        <button type="button" className="ml-3">
          <input type="file" name="" id="file-upload" className="hidden" />
          <label htmlFor="file-upload">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#83C0C1"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </button>
        <input
          className=" ml-4 border-0 h-8 flex-1 outline-none p-4 bg-slate-300 caret-white text-left font-semibold"
          type="text"
          placeholder="Send message"
        />
        {/* SUBMIT */}
        <button type="submit" className="h-9 rounded-full w-9 mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#83C0C1"
            className="w-6 h-6"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default SendMessageBar;