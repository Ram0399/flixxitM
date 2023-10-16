import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false); // eslint-disable-next-line
  const history = userHisory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        {" "}
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="FLIXXIT"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
