import LogoutIcon from "@/components/icons/Logout";
import FriendsIcon from "@/components/icons/Friends";
import InboxIcon from "@/components/icons/Inbox";
import BookmarkIcon from "@/components/icons/Bookmark";
import RequestsIcon from "@/components/icons/Requests";
import logo from "@/assets/images/oof-logo.png";
import profileImage from "@/assets/images/profile.png";

const Navbar = () => {
  return (
    <nav className="w-3/4 bg-dark-glassmorphism border-2 border-primary-silver rounded-custom-s">
      <ul className="flex gap-4 items-center justify-between py-4 px-6">
        <div className="leftIcons flex items-center justify-center gap-6">
          <li>
            <a href="/login">
              <div className="p-1 bg-secondary-dark border-2 border-primary-silver-80 rounded-custom-xs">
                <LogoutIcon />
              </div>
            </a>
          </li>
          <li>
            <a href="/friends">
              <div className="p-1 bg-secondary-dark border-2 border-primary-silver-80 rounded-custom-xs">
                <FriendsIcon />
              </div>
            </a>
          </li>
          <li>
            <a href="/messages">
              <div className="p-1 bg-secondary-dark border-2 border-primary-silver-80 rounded-custom-xs">
                <InboxIcon />
              </div>
            </a>
          </li>
        </div>
        <li>
          <img src={logo} alt="Logo" width={"148px"} height={"60px"} />
        </li>
        <div className="rightIcons flex items-stretch justify-center gap-6">
          <li>
            <a href="/bookmark">
              <div className="p-1 bg-secondary-dark border-2 border-primary-silver-80 rounded-custom-xs">
                <BookmarkIcon />
              </div>
            </a>
          </li>
          <li>
            <a href="/requests">
              <div className="p-1 bg-secondary-dark border-2 border-primary-silver-80 rounded-custom-xs">
                <RequestsIcon />
              </div>
            </a>
          </li>
          <li>
            <a href="/profile">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-primary-silver-80 rounded-custom-xs">
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
