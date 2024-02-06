import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function EditProfile() {


  const [preview, setPreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedImage) {
      const localUrl = URL.createObjectURL(selectedImage);
      setPreview(localUrl);
    }
  }, [selectedImage]);

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(null);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  return (
    <>
      <div className="h-screen mx-4 mt-4">
        {" "}
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
        <h2 className="text-xl text-center font-bold text-black/50 mb-4">
          Edit Profile
        </h2>
        <div className="w-full flex flex-col items-center gap-2 justify-center">
          {preview == null ? (
            <div className="h-32 w-32 rounded-full bg-slate-400"></div>
          ) : (
            <img
              src={preview}
              alt=""
              className="h-32 w-32 rounded-full object-cover object-center flex-shrink-0"
            />
          )}
          <button className="btn bg-[#83C0C1]/80 text-white">
            <label htmlFor="file-upload">Upload Profile Picture</label>{" "}
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleImageChange}
            />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <input
            type="text"
            placeholder="First Name"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            required
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            required
          />
          <textarea
            placeholder="Bio"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
            required
          ></textarea>
          <input
            type="text"
            placeholder="Address"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            required
          />
          <textarea
            placeholder="Styles"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
            required
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mt-4 mb-4">
          <button
            onClick={() => navigate("/profile/1")}
            className="btn w-full bg-[#83C0C1] text-white text-lg relative bottom-0 hover:opacity-100 transition ease-in mb-4 "
          >
            Save and Exit
          </button>
        </div>
      </div>
    </>
  );
}
