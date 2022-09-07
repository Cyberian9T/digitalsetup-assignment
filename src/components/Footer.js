import React from "react";
import Image from 'next/image'
import { navLinks } from "../data";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <section id="contact" className="pt-8 overflow-hidden">
                <div className="container">
                    <div className='row g-4'>
                        <div className='col-md-3'>
                            <Image src="/Layer_1.png" alt="Logo" width={147} height={53} />
                        </div>
                        <div className='col-md-3'>
                            <div className="row row-cols-2" >
                                {navLinks.map((link, index) => {
                                    return (
                                        <div key={index} className="col">
                                            <Link href={link.path} >
                                                <a>{link.name}</a>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <p>Follow Us</p>
                            <div>
                                <button type="button" className="shadow btn btn-light rounded-circle">
                                    <img src="/facebook.svg" alt="Logo" width={15} height={15} />
                                </button>
                                <button type="button" className="shadow btn btn-light rounded-circle">
                                    <img src="/twitter.svg" alt="Logo" width={15} height={15} />
                                </button>
                                <button type="button" className="shadow btn btn-light rounded-circle">
                                    <img src="/linkedin.svg" alt="Logo" width={15} height={15} />
                                </button>
                                <button type="button" className="shadow btn btn-light rounded-circle">
                                    <img src="/youtube.svg" alt="Logo" width={15} height={15} />
                                </button>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <p>Ready to Join Us?</p>
                            <button type="button" className="btn btn-light rounded-pill bg-primary text-white px-5">Join Us</button>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="fs-12">© 2022, KASIKORN Business-Technology Group (KBTG) All rights reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
    );
}