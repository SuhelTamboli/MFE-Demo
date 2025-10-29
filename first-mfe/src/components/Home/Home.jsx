import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>This is First MFE app home</p>
      <Link to={"/"}>Home</Link>
      <Link to={"/widget"}>Widget</Link>
    </div>
  );
};

export default Home;
