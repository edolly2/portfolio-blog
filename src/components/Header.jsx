import "./Header.css";

import World from "../assets/hand.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">Dolly & Dev</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img className="header-img" src={World} alt="Space" />
    </div>
  );
};

export default Header;
