import React from "react";
import Image from 'next/image'
import { navLinks } from "../data";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <section id="contact" className="m-5">
                <div className='row'>
                    <div className='col'>
                        <Image src="/Layer_1.png" alt="Logo" width={147} height={53} />
                    </div>
                    <div className='col'>
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
                    <div className='col'>
                        <p>Follow Us</p>
                        <div>
                            <button type="button" className="btn btn-light rounded-circle">
                                <Image src="/facebook.png" alt="Logo" width={15} height={15} />
                            </button>
                            <button type="button" className="btn btn-light rounded-circle">
                                <Image src="/twitter.png" alt="Logo" width={15} height={15} />
                            </button>
                            <button type="button" className="btn btn-light rounded-circle">
                                <Image src="/linkedin.png" alt="Logo" width={15} height={15} />
                            </button>
                            <button type="button" className="btn btn-light rounded-circle">
                                <Image src="/youtube.png" alt="Logo" width={15} height={15} />
                            </button>
                        </div>
                    </div>
                    <div className='col'>
                        <p>Ready to Join Us?</p>
                        <button type="button" className="btn btn-light rounded-pill" style={{ background: '#1ED0BD',color: '#ffffff'}}>Join Us</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <p>© 2022, KASIKORN Business-Technology Group (KBTG) All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
}