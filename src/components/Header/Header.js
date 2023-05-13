import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>KIBARU News</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a src="entertainment">Entertainment </a>
          </li>
          <li>
            <a href="">Politics</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Weather</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
