import "./HomePage.css";

import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default HomePage;
