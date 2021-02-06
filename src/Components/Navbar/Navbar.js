import React, { useContext } from "react";
import "./navbar.css";
import AuthContext from "../../context/Auth/authContext";

function Navbar() {
  const authCtx = useContext(AuthContext);
  const onLogout = (e) => {
    e.preventDefault();
    authCtx.logout();
  };
  return (
    <div id="navbar_main_container">
      <div id="header_nav">
        <div>
          <h1>
            {" "}
            <b> Rep </b>{" "}
          </h1>
          <h1 style={{ color: "#526CE4" }}>
            {" "}
            <b>suite.</b>{" "}
          </h1>
        </div>
        <button id="logout_btn" onClick={onLogout}>
          {" "}
          Logout{" "}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
