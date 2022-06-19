import "./Header.css";

import Road from "../assets/long.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">Blog</span>
      </div>
      <img className="header-img" src={Road} alt="Space" />
    </div>
  );
};

export default Header;
