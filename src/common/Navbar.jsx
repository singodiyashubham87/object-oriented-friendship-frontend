import { useLocation } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "@/components/icons/Logout";
import FriendsIcon from "@/components/icons/Friends";
import InboxIcon from "@/components/icons/Inbox";
import BookmarkIcon from "@/components/icons/Bookmark";
import RequestsIcon from "@/components/icons/Requests";
import logo from "@/assets/images/oof-logo.png";
import profileImage from "@/assets/images/profile.png";
import NavIcon from "@/components/NavIcon";

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  const navIcons = [
    { href: "/login", Icon: LogoutIcon, name: "logout" },
    { href: "/friends", Icon: FriendsIcon, name: "friends" },
    { href: "/messages", Icon: InboxIcon, name: "inbox" },
  ];

  const rightNavIcons = [
    { href: "/bookmark", Icon: BookmarkIcon, name: "bookmark" },
    { href: "/requests", Icon: RequestsIcon, name: "requests" },
  ];

  return (
    <nav className="w-3/4 bg-dark-glassmorphism border-2 border-secondary-silver rounded-custom-s blur-76 backdrop-blur-76">
      <ul className="flex gap-4 items-center justify-between py-4 px-6">
        <div className="leftIcons flex items-center justify-center gap-6">
          {navIcons.map((icon) => (
            <NavIcon
              key={icon.name}
              href={icon.href}
              IconComponent={icon.Icon}
              iconName={icon.name}
              hoveredIcon={hoveredIcon}
              setHoveredIcon={setHoveredIcon}
              isActive={location.pathname === icon.href}
            />
          ))}
        </div>
        <li>
          <img src={logo} alt="Logo" width={"148px"} height={"60px"} />
        </li>
        <div className="rightIcons flex items-stretch justify-center gap-6">
          {rightNavIcons.map((icon) => (
            <NavIcon
              key={icon.name}
              href={icon.href}
              IconComponent={icon.Icon}
              iconName={icon.name}
              hoveredIcon={hoveredIcon}
              setHoveredIcon={setHoveredIcon}
              isActive={location.pathname === icon.href}
            />
          ))}
          <li>
            <a href="/profile">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-primary-silver-80 hover:border-secondary-dark rounded-custom-xs">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-custom-xs"
                />
              </div>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
