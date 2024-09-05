import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white  rounded-lg">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">About HighFii</h1>
        <p className="text-3xl text-gray-700 mb-4">
          Welcome to HighFii, an exceptional blogging platform where you can
          share your stories and thoughts on technology and lifestyle. Whether
          you're passionate about the latest tech trends or have insights into
          modern living, HighFii is the place to connect with like-minded
          individuals and showcase your expertise.
        </p>
        <p className="text-xl text-gray-700 mb-4">
          Our mission is to provide a space where your voice is heard and your
          ideas are valued. Join our community and contribute to the
          conversation on tech innovations and lifestyle enhancements.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
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
    </div>
  );
};

export default AboutUs;
