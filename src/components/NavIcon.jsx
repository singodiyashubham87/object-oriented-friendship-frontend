const NavIcon = ({
  href,
  IconComponent,
  iconName,
  hoveredIcon,
  setHoveredIcon,
}) => {
  return (
    <li>
      <a href={href}>
        <div
          className="p-1 bg-secondary-dark border-2 border-primary-silver-80 hover:border-secondary-dark rounded-custom-xs hover:bg-primary-silver"
          onMouseEnter={() => setHoveredIcon(iconName)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <IconComponent
            color={hoveredIcon === iconName ? "#373737" : "#92918D"}
          />
        </div>
      </a>
    </li>
  );
};

export default NavIcon;
