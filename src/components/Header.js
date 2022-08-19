import React from "react";
import Image from 'next/image'
import { navLinks } from "../data";
import Link from "next/link";

export default function Header() {
    return (
        <header className="m-3">
            <div className="row">
                <div className="col">
                    <Image src="/Layer_1.png" alt="Logo" width={147} height={53} />
                </div>
                <div className="col d-flex justify-content-between">
                    {navLinks.map((link, index) => {
                        return (
                            <div className="d-flex justify-content-evenly m-3">
                                <Link href={link.path} >
                                    <a key={index}>{link.name}</a>
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="col">
                    <div className="dropdown d-flex flex-row-reverse">
                        <button
                            className="btn dropdown-toggle rounded-pill"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenu"
                            aria-expanded="false"
                            style={{ background: '#1ED0BD',color: '#ffffff'}}
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