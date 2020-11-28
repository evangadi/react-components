import React from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

function Nav() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="/">
            <img src={logo} alt="" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <HeaderLink linkName="Mac" linkUrl="/mac/" />
              <HeaderLink linkName="iphone" linkUrl="/iphone" />
              <HeaderLink linkName="ipad" linkUrl="/ipad" />
              <HeaderLink linkName="watch" linkUrl="/watch" />
              <HeaderLink linkName="tv" linkUrl="/tv" />
              <HeaderLink linkName="Music" linkUrl="/music" />
              <HeaderLink linkName="Support" linkUrl="/support" />

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search">
                  <img src={search} alt="" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart">
                  <img src={cart} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
