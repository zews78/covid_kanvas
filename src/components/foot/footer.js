import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./footer.css";

const footer = (props) => {
  return (
    <div className="footerBar">
      <a href="https://github.com/gawdsnitkkr">
        {" "}
        <i className="fa fa-github git icon" aria-hidden="true"></i>
        <abbr className="username">github.com/gwadsnitkkr</abbr>
      </a>

      <a href="https://www.instagram.com/_gawds/">
        {" "}
        <i className="fa fa-instagram insta icon" aria-hidden="true"></i>
        <abbr className="username">_gawds</abbr>
      </a>
    </div>
  );
};
export default footer;
