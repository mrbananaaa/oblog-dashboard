import { useLocation, useMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const NavItems = ({ title , logo, path }) => {
  const {pathname} = useLocation()

  const isActive = useMatch(path, pathname)

  return (
    <Link 
      to={path}
      className={isActive ? "nav-items-active" : "nav-items"}
    >
      <div className={isActive ? "nav-items-active-logo" : "nav-items-logo"}>{logo}</div>
      <div className={isActive ? "nav-items-active-title" : "nav-items-title"}>{title}</div>
    </Link>
  );
};

export default NavItems;
