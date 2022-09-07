import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 2000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CustomButtonGroup = ({ next, previous, }) => {
    return (
        <div className="position-relative bottom-0 end-50 z-1">
            <button className="bg-transparent border-0" onClick={() => previous()}>
                <svg width="60" height="30" viewBox="0 0 30 16">
                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM30 7L1 7V9L30 9V7Z" ></path>
                </svg>
            </button>
            <button className="bg-transparent border-0" onClick={() => next()}>
                <svg width="60" height="30" viewBox="0 0 30 16">
                    <path d="M29.7071 7.29289C30.0976 7.68342 30.0976 8.31658 29.7071 8.70711L23.3431 15.0711C22.9526 15.4616 22.3195 15.4616 21.9289 15.0711C21.5384 14.6805 21.5384 14.0474 21.9289 13.6569L27.5858 8L21.9289 2.34315C21.5384 1.95262 21.5384 1.31946 21.9289 0.928932C22.3195 0.538408 22.9526 0.538408 23.3431 0.928932L29.7071 7.29289ZM0 7L29 7V9L0 9L0 7Z" ></path>
                </svg>
            </button>
        </div>
    );
};


const screen_size = () => {
    if ('undefined' != typeof screen) {
        return window.screen.width <= 1024 ? true : false
    };
};


export default function Newsroom() {
    return (
        <section id='newsroom' className="py-8 overflow-hidden bg-light3" >
            <div className="container my-5">
                <div className="row" >
                    <div className="col-md-4 z-1" >
                        <p className='fs-60'>our<br /> <span className="text-primary">newsroom</span></p>
                    </div>
                    <div className="col-md-8">
                        <Carousel className="carousel"
                            responsive={responsive}
                            arrows={screen_size()} centerMode={false}
                            renderButtonGroupOutside={true}
                            customButtonGroup={<CustomButtonGroup />}
                            infinite={true} draggable={false}
                            partialVisible={true}
                        // autoPlay={true}
                        >
                            <div className="card m-3 p-1 bg-transparent border-0">
                                <img src="/card 1.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title fw-bold fs-24">we never cease to develop and innovate financialtechnologies on top.</p>
                                    <p className="card-text fs-18">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                                </div>
                            </div>
                            <div className="card m-3 p-1 bg-transparent border-0">
                                <img src="/card 2.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title fw-bold fs-24">we never cease to develop and innovate financialtechnologies on top.</p>
                                    <p className="card-text fs-18">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                                </div>
                            </div>
                            <div className="card m-3 p-1 bg-transparent border-0">
                                <img src="/card 3.png" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-title fw-bold fs-24">we never cease to develop and innovate financialtechnologies on top.</p>
                                    <p className="card-text fs-18">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-9" >
                    <button type="button" className="btn btn-primary text-light rounded-pill px-5" >All News</button>
                </div>
            </div>
        </section>
    );
}