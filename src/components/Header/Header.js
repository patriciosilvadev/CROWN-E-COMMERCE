import React from "react";
import { ReactComponent as Logo } from "./Header.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/Firebase";
const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP{" "}
        </Link>
        <Link className="option" to="/shop">
          CONTACT{" "}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default Header;