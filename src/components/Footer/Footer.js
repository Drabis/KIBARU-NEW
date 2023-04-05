import React from "react";
import "./footer.css"

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} KIBARU News App. All rights reserved.</p>
      <nav>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
