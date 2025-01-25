import FeedNextArrowIcon from "@/components/icons/FeedNextArrowIcon";
import FeedPrevArrowIcon from "@/components/icons/FeedPrevArrowIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { friendsData } from "@/pages/Friends/data/friends";
import { useState } from "react";

const Feed = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevArrowColor, setPrevArrowColor] = useState("#C7C2C2");
  const [nextArrowColor, setNextArrowColor] = useState("#C7C2C2");

  const handleNext = () => {
    if (currentIndex < friendsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex-grow flex flex-col justify-evenly items-center w-full h-11/12 bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s overflow-y-auto overflow-x-hidden px-6 py-6">
      <div className="flex justify-center h-1/5 ">
        <h2 className="text-4xl text-primary-silver font-bold uppercase">
          feed
        </h2>
      </div>
      <div className="w-full flex flex-grow justify-between items-center flex-wrap px-4 py-6 gap-6 overflow-y-auto overflow-x-hidden ">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          type="button"
          className={`  ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
          onMouseEnter={() => setPrevArrowColor("#e7e7e7")}
          onMouseLeave={() => setNextArrowColor("#c7c2c2")}
        >
          <FeedPrevArrowIcon color={prevArrowColor} />
        </button>
        <div className="cards w-10/12 flex justify-center items-center relative">
          {/* Left faded card */}
          {currentIndex > 0 && (
            <div className="absolute z-1 left-16 w-[15rem] h-[19rem] border border-gray-300 bg-gray-800 opacity-50 scale-90 rounded-custom-s transition-transform p-6">
              <div className="h-[10rem] border-2 border-primary-dark rounded-custom-xs object-cover overflow-hidden">
                <img
                  src={
                    friendsData[currentIndex - 1]?.image ||
                    "https://media.istockphoto.com/id/1408596915/photo/employees-must-complete-the-online-survey-form-answer-the-test-questions-marked-checklist-on.jpg?s=2048x2048&w=is&k=20&c=JCkoENdhBCbi0DC0lIi1did1rHfNd8wu-AVq2bduFyw="
                  }
                  alt="Friend"
                  className="w-56 h-56 rounded-xl"
                />
              </div>
              <p className="text-center text-white font-bold text-lg">
                {friendsData[currentIndex - 1]?.name}
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-gray-300">21, M</span>
                <LocationIcon />
                <span className="text-gray-300">RJ</span>
              </div>
            </div>
          )}

          {/* Active card */}
          <div className="z-10 w-[19rem] h-[23rem] border border-gray-400 rounded-custom-s bg-gray-800 shadow-lg p-6">
            <div className="w-full h-[13rem] border-2 border-primary-dark rounded-custom-xs object-cover overflow-hidden">
              <img
                src={
                  friendsData[currentIndex]?.image ||
                  "https://imgs.search.brave.com/sMcgal2XI2iAo_tND_9PgnZWVnna0tvZoWgZnUnuQDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFtMTcteWR6TEwu/anBn"
                }
                alt="Friend"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-white font-bold text-lg">
              {friendsData[currentIndex]?.name}
            </p>
            <div className="flex justify-center items-center gap-2 mt-2">
              <span className="text-gray-300">21, M</span>
              <LocationIcon />
              <span className="text-gray-300">RJ</span>
            </div>
          </div>

          {/* Right faded card */}
          {currentIndex < friendsData.length - 1 && (
            <div className="absolute right-16 w-[15rem] h-[19rem] border border-gray-300 bg-gray-800 opacity-50 scale-90 rounded-custom-s transition-transform p-6">
              <div className="h-[10rem] border-2 border-primary-dark rounded-custom-xs object-cover overflow-hidden">
                <img
                  src={
                    friendsData[currentIndex + 1]?.image ||
                    "https://media.istockphoto.com/id/1434437996/photo/woman-hand-writing-on-clipboard-with-a-pen.jpg?s=2048x2048&w=is&k=20&c=r80A-T41z3wwxA-3LD_nYLF3rxMl0JrmS--dULY9TcY="
                  }
                  alt="Friend"
                  className="w-56 h-56 rounded-xl"
                />
              </div>
              <p className="text-center text-white font-bold text-lg">
                {friendsData[currentIndex + 1]?.name}
              </p>
              <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-gray-300">21, M</span>
                <LocationIcon />
                <span className="text-gray-300">RJ</span>
              </div>
            </div>
          )}
        </div>
        {/* Next button */}
        <button
          onClick={handleNext}
          type="button"
          className={` ${
            currentIndex === friendsData.length - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex === friendsData.length - 1}
          onMouseEnter={() => setNextArrowColor("#e7e7e7")}
          onMouseLeave={() => setNextArrowColor("#c7c2c2")}
        >
          <FeedNextArrowIcon color={nextArrowColor} />
        </button>
      </div>
    </div>
  );
};

export default Feed;
