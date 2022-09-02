import React from "react";
import Image from 'next/image'
import { navLinks } from "../data";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky-top p-2 overflow-hidden" style={{ background: '#ffffff'}}>
            <div className="row">
                <div className="col-2">
                    <Image src="/Layer_1.png" alt="Logo" width={147} height={53} />
                </div>
                <div className="col d-flex justify-content-center">
                    {navLinks.map((link, index) => {
                        return (
                            <div key={index} className="d-flex justify-content-evenly m-3 fs-16">
                                <Link  href={link.path} >
                                    <a>{link.name}</a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="col-2 z-3">
                    <div className="dropdown d-flex flex-row-reverse">
                        <button
                            className="btn btn-primary dropdown-toggle rounded-pill text-light"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenu"
                            aria-expanded="false"
                        >
                            En
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#en">English</a>
                            <a className="dropdown-item" href="#th">Thai</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}