import React from "react";
import "./header.css";
function Header() {
  return (
    <header>
      <div className="logo">
        <h1>News App</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Politics</a>
          </li>
          <li>
            <a href="#">Business</a>
          </li>
          <li>
            <a href="#">Sports</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
