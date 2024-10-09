import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <header >
      <nav>
        <div className="navbar flex justify-between items-center bg-base-300 px-4">
          <a href="/" className="btn btn-ghost text-lg">
            Next Amazona V2
          </a>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
