import Image from 'next/image'

export default function About() {
    return (
        <section id='about'>
            <div>
                <div className="row posionit-relative">
                    <div className='col-3 m-2'>
                        <h1 style={{position: 'relative', fontSize: '10rem', color: '#1ED0BD', zIndex: 1}}>CONNECT<br /> TECHNOLOGY</h1>
                    </div>
                    <div className='col' style={{position: 'relative', height: '65rem', top:'4rem', left:'1rem'}}>
                        <Image src="/banner.png" layout='fill' objectFit='contain' />
                    </div>
                </div>

                <div className="row">
                    <div className='col-4 d-flex justify-content-center' >
                        <Image src="/art_01.png" width={42.92} height={265.71} />
                    </div>

                    <div className='col'>
                        <h2>
                            connect for the better
                        </h2>
                        <p>
                            At DSU, we never cease to develop and innovate financial technologies on top of our
                            “Customer First” mindset. We are the driving force behind KBank's success as well as
                            their navigator exploring the digital world beyond Thailand. Our wide-ranging online
                            banking services are equipped with concrete infrastructure and strong barriers capable
                            of guarding customers' valuable assets and data. Utilizing our expertise in FinTech
                            business, combined with new generation's outside-the-box thinking, KBTG aims to transform
                            into the best tech organization of Southeast Asia.
                        </p>
                        <button type="button" className="btn btn-light rounded-pill" style={{ color: '#1ED0BD'}}>More stories</button>
                    </div>
                </div>
            </div>
        </section>
    );
}