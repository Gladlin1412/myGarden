import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homeimg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to myGarden </h1>
        <p> At <b>myGarden</b>, we bring gardening enthusiasts and nature lovers together to celebrate the joy of growing. Whether you're planting your first seed or expanding a lush oasis, myGarden is here to inspire, educate, and empower.</p>
        <Link to="/Blog">
          <button> Explore More </button>
        </Link>
        <span>   </span>
        <Link to="/Contact">
          <button> Contact Us </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;