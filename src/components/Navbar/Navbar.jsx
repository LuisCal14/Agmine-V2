import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";

function Nav() {
  const [toogleMenu, setToogleMenu] = React.useState(false);

  return (
    <div className="nav">
      <div className="logo-container">
        <Link to="/home">
          <img src={Logo} alt="app logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home/#home" className="nav-txt">
            Home
          </Link>
        </li>
        <li>
          <a href="/home/#about" className="nav-txt">
            About
          </a>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
      </ul>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#9bf2ea"
          fontSize={30}
          onClick={() => setToogleMenu(true)}
        ></GiHamburgerMenu>

        {toogleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={30}
              color="#9bf2ea"
              className="overlay__close"
              onClick={() => setToogleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <li className="p__opensans">
                <Link to="/home/#home" onClick={() => setToogleMenu(false)}>
                  Home
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/home/#about" onClick={() => setToogleMenu(false)}>
                  About
                </Link>
              </li>
              <li className="p__opensans">
                <Link to="/quizziz" onClick={() => setToogleMenu(false)}>
                  Games
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
