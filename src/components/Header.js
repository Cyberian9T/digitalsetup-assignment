import React from "react";
import Image from "next/image";
import { navLinks } from "../data";
import Link from "next/link";

if (typeof window !== 'undefined') {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  }
}

export default function Header() {
  return (
    <header id="header" className="sticky-top py-2 px-4 bg-white">
      <div className="row justify-content-center align-items-center">
        <div className="col-2">
          <Image src="/Layer_1.png" alt="Logo" width={147} height={53} />
        </div>
        <ul className="col-8 list-unstyled d-flex gap-5 justify-content-center mb-0">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="col-2 z-3">
          <div className="dropdown d-flex flex-row-reverse ">
            <button
              className="btn btn-primary text-light dropdown-toggle rounded-pill px-4 py-1"
              data-bs-toggle="dropdown"
              id="dropdownMenu"
              aria-expanded="false">
              En
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#en">
                English
              </a>
              <a className="dropdown-item" href="#th">
                Thai
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
