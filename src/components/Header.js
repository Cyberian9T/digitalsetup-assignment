import React from "react";
import Image from "next/image";
import { navLinks } from "../data";
import Link from "next/link";

// if (typeof window !== 'undefined') {
//   let prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//       document.getElementById("header").style.top = "0";
//     } else {
//       document.getElementById("header").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
//   }
// }


export default function Header() {
  return (
    <header id="header" className="container-fluid sticky-top px-4 bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="col-4 col-md-2">
            <img className='w-50' src="/Layer_1.png" alt="Logo" />
          </div>

          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse col-md-10" id="navbarNav">
            <div className="col-md-10 mt-5">
              <ul className="row list-unstyled d-flex gap-1 justify-content-evenly">
                {navLinks.map((link, index) => {
                  return (
                    <li key={index} className="col-3 col-md-1 text-center"
                      data-bs-toggle="collapse.hide"
                      data-bs-target=".navbar-collapse.show">
                      <a href={link.path}>{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="ms-auto">
              <div className="dropdown">
                <button type="button" className="btn btn-primary text-light dropdown-toggle rounded-pill px-4 py-1" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownMenuLink">
                  En
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item" href="#en">English</a></li>
                  <li><a className="dropdown-item" href="#th">Thai</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
