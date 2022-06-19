import "./TopNav.css";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";

import ProfilePic from "../assets/profile-pic.png";

const TopNav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <FaFacebookSquare className="nav-social-icon" />
        <FaTwitterSquare className="nav-social-icon" />
        <FaGithubSquare className="nav-social-icon" />
        <FaLinkedin className="nav-social-icon" />
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-list-item">HOME</li>
          <li className="nav-list-item">ABOUT</li>
          <li className="nav-list-item">CONTACT</li>
          <li className="nav-list-item">WRITE</li>
          <li className="nav-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="nav-right">
        <img
          className="nav-profile-img"
          src={ProfilePic}
          alt="Eric Dollinger"
        />
        <FaSearch className="nav-search-icon" />
      </div>
    </div>
  );
};

export default TopNav;
