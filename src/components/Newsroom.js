import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Newsroom() {
    return (
        <section id='newsroom'>
            <div className="row">
                <div className="col">
                    <h1>our<br /> <span style={{ color: '#1ED0BD' }}>newsroom</span></h1>
                </div>
                <div className="col" style={{ width: "70%" }}>
                    <Carousel responsive={responsive} infinite >
                        <div className="card" style={{ width: "18rem" }} >
                            <Image src="/card 1.png" className="card-img-top" alt="..." width={498} height={334} />
                            <div className="card-body">
                                <h5 className="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                                <p className="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }} >
                            <Image src="/card 2.png" className="card-img-top" alt="..." width={498} height={334} />
                            <div className="card-body">
                                <h5 className="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                                <p className="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                            </div>
                        </div>
                        <div className="card" style={{ width: "18rem" }} >
                            <Image src="/card 3.png" className="card-img-top" alt="..." width={498} height={334} />
                            <div className="card-body">
                                <h5 className="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                                <p className="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="d-flex justify-content-center m-5" >
                <button type="button" className="btn btn-light rounded-pill" style={{ background: '#1ED0BD', color: '#ffffff' }}>All News</button>
            </div>
        </section>
    );
}