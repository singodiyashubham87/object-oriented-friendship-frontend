import { Link } from "react-router-dom";

const NavIcon = ({
  href,
  IconComponent,
  iconName,
  hoveredIcon,
  setHoveredIcon,
  isActive,
}) => {
  return (
    <li>
      <Link to={href}>
        <div
          className={`p-1 border-2 rounded-custom-xs ease-in duration-200 ${
            isActive
              ? "bg-secondary-silver border-secondary-dark"
              : "bg-secondary-dark border-secondary-silver hover:bg-secondary-silver hover:border-secondary-dark"
          }`}
          onMouseEnter={() => setHoveredIcon(iconName)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <IconComponent
            color={isActive || hoveredIcon === iconName ? "#373737" : "#92918D"}
          />
        </div>
      </Link>
    </li>
  );
};

export default NavIcon;
