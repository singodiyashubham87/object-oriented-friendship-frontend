import userAvatar from "@/assets/images/userAvatar.png";
import LocationIcon from "@/components/icons/LocationIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import { friendsData } from "@/pages/Friends/data/friends";
import React from "react";
import { Tooltip } from "react-tooltip";

const UserProfile = () => {
  return (
    <div className="flex-grow flex flex-col justify-evenly items-center w-full h-11/12 bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s overflow-y-auto overflow-x-hidden px-6 py-6">
      <div className="flex justify-center h-1/5">
        <h2 className="text-4xl text-primary-silver font-bold uppercase">
          User Profile
        </h2>
      </div>
      <div className="w-full h-4/5 flex flex-grow justify-center flex-wrap px-4 my-6 gap-6 overflow-y-auto overflow-x-hidden border-2 border-red-500"></div>
    </div>
  );
};

export default UserProfile;
