import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL, DEFAULT_PFP } from "./lib/constants";
import { useCurrentUserContext } from "./lib/context/currentUserContext";
import { storage, DB_STORAGE_PFP_KEY } from "./lib/firebase";
import {
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

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

  useEffect(() => {
    setAddressValue(currentUser.address);
    setUsernameValue(currentUser.username);
    setBioValue(currentUser.bio);
    setFirstNameValue(currentUser.firstName);
    setLastNameValue(currentUser.lastName);
    setStylesValue(currentUser.style);
    setProfilePictureUrl(currentUser.profilePictureUrl);
  }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();
    // GET REQUEST TO SEE IF USERNAME EXISTS ALREADY. IF IT DOES, NOTIFY THE USER

    // FOR PROFILEPICTUREFILE, SEND TO FIREBASE, GET DOWNLOAD URL THEN SET profilePictureUrl
    const dbUpdateUserData = await axios.put(`${BACKEND_URL}/users`, {
      firstName: firstNameValue,
      lastName: lastNameValue,
      username: usernameValue,
      bio: bioValue,
      style: stylesValue,
      address: addressValue,
      profilePicture: profilePictureUrl,
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
            <img
              src={
                preview
                  ? preview
                  : DEFAULT_PFP
              }
              alt=""
              className="h-32 w-32 rounded-full object-cover object-center flex-shrink-0"
            />
          

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
            value={firstNameValue}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setLastNameValue(e.target.value);
            }}
            value={lastNameValue}
          />
          <input
            type="text"
            placeholder="Username (required)"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setUsernameValue(e.target.value);
            }}
            value={usernameValue}
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
            value={bioValue}
          ></textarea>
          <input
            type="text"
            placeholder="Address"
            className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
            onChange={(e) => {
              setAddressValue(e.target.value);
            }}
            value={addressValue}
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
            value={stylesValue}
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center mt-4 mb-4">
          <button
            type="submit"
            disabled={usernameValue ? false : true}
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
