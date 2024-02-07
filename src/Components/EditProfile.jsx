import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "./lib/constants";
import { useCurrentUserContext } from "./lib/context/currentUserContext";

export default function EditProfile() {
  const [preview, setPreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  //PROFILE DETAILS STATES
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [bioValue, setBioValue] = useState("");
  const [stylesValue, setStylesValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const { currentUser } = useCurrentUserContext();
  

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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

  const handleSubmit = async () => {


    // FOR PROFILEPICTUREFILE, SEND TO FIREBASE, GET DOWNLOAD URL THEN SET profilePictureUrl
    const dbCreateUserData = await axios.put(`${BACKEND_URL}/users`, {
      firstName: firstNameValue,
      lastName: lastNameValue,
      username: usernameValue,
      bio: bioValue,
      styles: stylesValue,
      address: addressValue,
    });
  };

  return (
    <>
      <div className="h-screen mx-4 mt-4">
        {" "}
        <h2 className="text-xl text-center font-bold text-black/50 mb-4">
          Edit Profile
        </h2>
        <div className="w-full flex flex-col items-center gap-2 justify-center">
          {/* PROFILE PICTURE PREVIEW */}
          {preview == null ? (
            <div className="h-32 w-32 rounded-full bg-slate-400"></div>
          ) : (
            <img
              src={preview}
              alt=""
              className="h-32 w-32 rounded-full object-cover object-center flex-shrink-0"
            />
          )}

          {/* PFP SET */}
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
            onChange={(e) => {
              setFirstNameValue(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setLastNameValue(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username (required)"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setUsernameValue(e.target.value);
            }}
          />
          <textarea
            placeholder="Bio"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
            onChange={(e) => {
              setBioValue(e.target.value);
            }}
          ></textarea>
          <input
            type="text"
            placeholder="Address"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setAddressValue(e.target.value);
            }}
          />
          <textarea
            placeholder="Styles"
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
            onChange={(e) => {
              setStylesValue(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mt-4 mb-4">
          <button
            type="submit"
            disabled={usernameValue.length!==0? false:true}
            onClick={() => handleSubmit}
            className="btn w-full bg-[#83C0C1] text-white text-lg relative bottom-0 hover:opacity-100 transition ease-in mb-4 "
          >
            Save and Exit
          </button>
        </div>
      </div>
    </>
  );
}
