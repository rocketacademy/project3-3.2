import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EditProfile() {
  const [preview, setPreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  //PROFILE DETAILS STATES
  const [profilePictureUrl, setProfilePictureUrl] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName ]= useState("")
  const [username, setUsername] = useState("")
  const [bio, setBio]= useState("")
  const [styles, setStyles] = useState("")
  const [address, setAddress] = useState("")
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


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

 const onSubmit = async(data) =>{
  const { address, bio, firstName,lastName, profilePictureFile, styles, username} =data
  setFirstName(firstName)
  setLastName(lastName)
  setUsername(username)
  setStyles(styles)
  setAddress(address)
  setBio(bio)
  // FOR PROFILEPICTUREFILE, SEND TO FIREBASE, GET DOWNLOAD URL THEN SET profilePictureUrl
 }

  return (
    <>
      <div className="h-screen mx-4 mt-4">
        {" "}
        <h2 className="text-xl text-center font-bold text-black/50 mb-4">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("profilePictureFile", { required: false })}
              />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            {" "}
            <input
              type="text"
              placeholder="First Name"
              className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-400/80 font-bold text-xs w-full">
                This field is required
              </span>
            )}
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
              {...register("lastName", { required: false })}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-red-400/80 font-bold text-xs w-full">
                This field is required
              </span>
            )}
            <textarea
              placeholder="Bio"
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
              {...register("bio", { required: false })}
            ></textarea>
            <input
              type="text"
              placeholder="Address"
              className="w-full mt-4 p-3 bg-slate-300/30 rounded outline-[#83C0C1] active:outline-[#83C0C1]"
              {...register("address", { required: false })}
            />
            <textarea
              placeholder="Styles"
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full mt-4 p-3 outline-[#83C0C1] rounded active:outline-[#83C0C1] bg-slate-300/30"
              {...register("styles", { required: false })}
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-center mt-4 mb-4">
            <button
              type="submit"
              // onClick={() => navigate("/profile/1")}
              className="btn w-full bg-[#83C0C1] text-white text-lg relative bottom-0 hover:opacity-100 transition ease-in mb-4 "
            >
              Save and Exit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
