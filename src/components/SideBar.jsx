import "./SideBar.css";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

import AboutMe from "../assets/about-me.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img className="sidebar-img" src={AboutMe} alt="About Me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ea!
          Tempora accusantium quod inventore eum?
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Category - 1</li>
          <li className="sidebar-list-item">Category - 2</li>
          <li className="sidebar-list-item">Category - 3</li>
          <li className="sidebar-list-item">Category - 4</li>
          <li className="sidebar-list-item">Category - 5</li>
          <li className="sidebar-list-item">Category - 6</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW ME</span>
        <div className="sidebar-social">
          <FaFacebookSquare className="sidebar-social-icon" />
          <FaTwitterSquare className="sidebar-social-icon" />
          <FaGithubSquare className="sidebar-social-icon" />
          <FaLinkedin className="sidebar-social-icon" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
