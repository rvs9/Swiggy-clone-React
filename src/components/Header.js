import { Link } from "react-router-dom";
import Logo from "./Logo";


const Header = () => {
  const clickHandler = "";

  return (
    <div className="header">
      <Logo />
      <div className="nav">
        <ul>
          <li>Search</li>
          <li><Link to="offers">Offers</Link></li>
          <li><Link to="help">Help</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
