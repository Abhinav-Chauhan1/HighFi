import React, { useState, useRef } from "react";
import Nav from "../Components/Nav";
import { getAuth, updateProfile, signOut } from "firebase/auth";
import { storage } from "../firebase";
import ProfileLogo from "../assets/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const initialState = {
  name: "",
  email: "",
};

const About = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [Form, setForm] = useState(initialState);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropper, setShowCropper] = useState(false); // State to manage cropper visibility
  const cropperRef = useRef(null);

  const { email, name } = Form;

  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Logout Error: ", error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (!name && !email && !croppedImage) {
        toast("At least one field is required");
        return;
      }

      const profileData = {};

      if (name) {
        profileData.displayName = name;
      }

      if (email) {
        profileData.email = email;
      }

      if (croppedImage) {
        const storageRef = ref(storage, `profile_images/${Date.now()}`);
        await uploadBytes(storageRef, croppedImage);
        const imageUrl = await getDownloadURL(storageRef);
        profileData.photoURL = imageUrl;
      }

      await updateProfile(auth.currentUser, profileData);
      navigate("/");
      toast("Profile updated successfully");
    } catch (error) {
      console.error("Profile update error: ", error);
      toast("Failed to update profile");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setShowCropper(true); // Show cropper interface
      };
      reader.readAsDataURL(file);
    }
  };

  const cropImage = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedCanvas = cropper.getCroppedCanvas({
        aspectRatio: 1,
        width: 200,
        height: 200,
      });

      croppedCanvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setCroppedImage(blob);
        setImage(null);
        setShowCropper(false); // Hide cropper interface
        URL.revokeObjectURL(url);
      }, "image/jpeg");
    }
  };

  return (
    <div>
      <Nav />
      <div className="my-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 mt-16 sm:py-4 md:mx-auto">
        <form>
          <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
            <div className="shrink-0 mr-auto sm:py-3">
              <p className="font-medium">Account Details</p>
              <p className="text-sm text-gray-600">Edit your account details</p>
            </div>
            <Link
              to="/"
              className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              onClick={handleAuth}
              className="hidden mr-2 rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700"
            >
              Save
            </button>

            <a
              title="LogOut"
              className="hidden rounded-lg border-2 border-transparent bg-blue-600 p-2 font-medium text-white sm:inline focus:outline-none focus:ring cursor-pointer"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Name</p>
            <input
              placeholder={user.displayName}
              className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
            <p className="shrink-0 w-32 font-medium">Email</p>
            <input
              placeholder={user.email}
              className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4 py-4 lg:flex-row">
            <div className="shrink-0 w-32 sm:py-4">
              <p className="mb-auto font-medium">Avatar</p>
              <p className="text-sm text-gray-600">Change your avatar</p>
            </div>
            <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
              <img
                src={
                  croppedImage
                    ? URL.createObjectURL(croppedImage)
                    : user.photoURL || ProfileLogo
                }
                className="h-16 w-16 rounded-full"
                alt="Profile"
              />
              <p className="text-sm text-gray-600">
                Drop your desired image file here to start the upload
              </p>
              <input
                type="file"
                name="profilepic"
                className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                onChange={handleFileChange}
              />
              {showCropper && image && (
                <div className="w-full flex flex-col items-center">
                  <Cropper
                    ref={cropperRef}
                    src={image}
                    style={{ height: 200, width: "100%" }}
                    aspectRatio={1}
                    guides={false}
                  />
                  <button
                    type="button"
                    className="mt-2 rounded-lg border-2 border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={cropImage}
                  >
                    Crop
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end py-4 sm:hidden">
            <Link
              to="/"
              className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              onClick={handleAuth}
              className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
            >
              Save
            </button>
          </div>
          {/* <div className="flex justify-center cursor-pointer my-5">
            <a
              className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={handleLogout}
            >
              Logout {user.displayName}
            </a>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default About;
