import React from "react";
import { navLinks } from "../data";

let count = 0

if (typeof window !== 'undefined') {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos <= currentScrollPos && window.screen.width >= 768) {
      document.getElementById("header").style.top = "-100px";
    }else if (prevScrollpos <= currentScrollPos && (count == 0 && window.screen.width < 768)) {
      document.getElementById("header").style.top = "-100px";
    }
    else {
      document.getElementById("header").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
  }
  
}

function nav_link_Click() {
  document.getElementById("navbarNav").className = "navbar-collapse w-100 collapse";
  count = 0
}

function status_nav() {
  if (typeof window !== 'undefined') {
    if (count == 1) {
      count = 0
      // window.onscroll = function () { };
    } else {
      count = 1
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      // window.onscroll = function () {
      //   window.scrollTo(scrollLeft, scrollTop);
      // };
    }
    console.log(count)
  }
}



export default function Header() {
  return (
    <header id="header" className="container-fluid sticky-top px-4 bg-white">
      <nav className="navbar navbar-expand-md justify-content-center py-1 py-md-3">
        <div className="container-fluid">
          <div className="navbar-brand d-flex w-50 me-auto">
            <img className='' src="/Layer_1.png" alt="Logo" width="100" />
          </div>
          <button id="navbar-header" className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation" onClick={() => status_nav()}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-100" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-between">
              {navLinks.map((link, index) => {
                return (
                  <li key={index} className="nav-item ">
                    <a className="nav-link" href={link.path} onClick={() => nav_link_Click()}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
            <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
              <li className="nav-item dropdown">
                <a type="button" className="btn btn-primary text-light nav-link dropdown-toggle rounded-pill px-4"
                  data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuLink">
                  En
                </a>
                <ul className="dropdown-menu dropdown-menu-end m-0" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#en">English</a></li>
                  <li><a className="dropdown-item" href="#th">Thai</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
