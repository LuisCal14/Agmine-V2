import React from "react";
import Nav from "../components/Navbar/Navbar";

const MainPage = ({ Main }) => {
  return (
    <>
      <div className="app">
        <Nav />
        <Main />
      </div>
    </>
  );
};

export default MainPage;
