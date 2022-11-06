import { Link } from "react-router-dom";

const ButtonMain = ({ text = "button", path = "/" }) => {
  return (
    <Link to={path}>
      <div 
        className="btn btn-main"
      >
        {text}
      </div>
    </Link>
  );
};

const ButtonSec = ({ text = "button", path = "/", ...props }) => {
  return (
    <Link to={path}>
      <div 
        className="btn btn-sec"
        {...props}
      >
        {text}
      </div>
    </Link>
  );
};

export { ButtonMain, ButtonSec };
