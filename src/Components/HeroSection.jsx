import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex h-[70vh] m-2">
      {/* First div taking 60% of the width */}
      <div
        className="w-full h-full flex justify-center items-center rounded-xl"
        style={{
          background: `
            linear-gradient(
              135deg,
              #121212 25%,
              #1a1a1a 25%,
              #1a1a1a 50%,
              #121212 50%,
              #121212 75%,
              #1a1a1a 75%,
              #1a1a1a
            ),
            radial-gradient(circle at 50% 50%, #121212, #1a1a1a)
          `,
          backgroundSize: "40px 40px",
          animation: "move 4s linear infinite",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="10em"
          height="10em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="blue"
            d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
          />
        </svg>
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
          HighFii
          <span className="block text-xl mt-2 ml-0 sm:ml-5">
            Where ideas come alive
          </span>
        </p>
      </div>

      <button
        className="absolute bottom-5 right-5 mr-5  text-white p-3 rounded-full"
        style={{ zIndex: 10 }}
      >
        <span className="text-white flex">
          About Us{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-arrow-up-right-circle-fill ml-1"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 1.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
          </svg>
        </span>
        <div className="border border-white rounded-full p-2"></div>
      </button>
    </div>
  );
};

export default HeroSection;
