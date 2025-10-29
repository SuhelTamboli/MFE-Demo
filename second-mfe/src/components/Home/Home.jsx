import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>This is Second MFE app home</p>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>SignUp</Link>
    </div>
  );
};

export default Home;
