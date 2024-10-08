
import React from "react";
import Menu from "./menu";
import SearchBox from "./searchbox";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label
              htmlFor="my-drawer"
              className="btn btn-square btn-ghost"
            ></label>
          <a href="/" className="btn btn-ghost text-lg">
              Next Amazona V2
            </a>
              {/* <ul className="flex ">
              <li> 
                <a className="btn btn-ghost rounded-btn" href="/cart">
                 Cart
                </a>
              </li>
              <li> 
                <link className="btn btn-ghost rounded-btn" href="/signin">
                 Sign In
                </link>
              </li>
            </ul> */}
          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;
