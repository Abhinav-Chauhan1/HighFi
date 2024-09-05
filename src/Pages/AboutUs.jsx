import React, { useState } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto my-8 p-4 bg-white rounded-lg">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">About HighFii</h1>
        <p className="text-3xl text-gray-700 mb-4">
          Welcome to HighFii, an exceptional blogging platform where you can
          share your stories and thoughts on technology and lifestyle.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-4">Features</h2>

        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="../../public/header.png"
            alt="Sleek Design"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => openModal("../../public/header.png")}
          />
          <p className="text-xl text-gray-700 md:w-1/2">
            Experience our sleek and cheeky design that captures attention and
            enhances your reading experience. The modern and stylish layout
            ensures that every visit is engaging and enjoyable.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center mb-8 mt-10">
          <img
            src="../../public/blogs.png"
            alt="Awesome Blog"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:ml-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => openModal("../../public/blogs.png")}
          />
          <p className="text-xl text-gray-700 md:w-1/2">
            Discover awesome blogs to read and get inspired. Our platform
            features a variety of articles that are both informative and
            thought-provoking, catering to your interests in technology and
            lifestyle.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="../../public/layout.png"
            alt="Easy to Read"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => openModal("../../public/layout.png")}
          />
          <p className="text-xl text-gray-700 md:w-1/2">
            Enjoy easy-to-read articles that provide clear and concise
            information. Our clean and organized layout ensures that you can
            focus on the content without distractions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            src="../../public/profile.png"
            alt="Manage Your Profile"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:ml-4 shadow-md rounded-lg cursor-pointer"
            onClick={() => openModal("../../public/profile.png")}
          />
          <p className="text-xl text-gray-700 md:w-1/2">
            Manage your profile with ease. Our intuitive interface makes it
            simple to update your information, track your posts, and engage with
            the community.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 mt-8 flex"
        >
          <p className="text-xl mr-1">Back to Home </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </Link>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Expanded View"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl bg-black rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
