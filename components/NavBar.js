import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [style, setStyle] = useState("navbar1");

  const changeClass = (e) => {
    if (style == "navbar1") {
      setStyle("navbar_change");
    } else if (style == "navbar_change") {
      setStyle("navbar1");
    }
  };

  return (
    <div className="navbar">
      <div className="navbarmobile">
        <div className="svg1" onClick={changeClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      <div className={style}>
        <div className="navbar2">
          <Link activeClassName="active" href="/" passHref>
            <a className="navbar3">Home</a>
          </Link>
          <Link activeClassName="active" href="/contact" passHref>
            <a className="navbar3">Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
