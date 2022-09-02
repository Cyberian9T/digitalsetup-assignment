import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
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
        <div className="position-relative top-15 start-0">
            <button type="button" className="bg-transparent border-0" onClick={() => previous()}>
                <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
                    <path d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM30 7L1 7V9L30 9V7Z" fill="#61706F"></path>
                </svg>
            </button>
            <button type="button" className="bg-transparent border-0" onClick={() => next()}>
                <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
                    <path d="M29.7071 7.29289C30.0976 7.68342 30.0976 8.31658 29.7071 8.70711L23.3431 15.0711C22.9526 15.4616 22.3195 15.4616 21.9289 15.0711C21.5384 14.6805 21.5384 14.0474 21.9289 13.6569L27.5858 8L21.9289 2.34315C21.5384 1.95262 21.5384 1.31946 21.9289 0.928932C22.3195 0.538408 22.9526 0.538408 23.3431 0.928932L29.7071 7.29289ZM0 7L29 7V9L0 9L0 7Z" fill="#1ED0BD"></path>
                </svg>
            </button>
            <button type="button" className="bg-transparent border-0 align-middle" onClick={() => { }}>
                <span className='align-middle text-dark'>More stories</span>
            </button>
        </div>
    );
};


export default function KBTG_Life() {
    return (
        <section id='kbtg-life' className="p-5 overflow-hidden">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className='col-6'>
                        <img className='position-relative bottom-0 end-20 ' style={{height:"80%"}} src="/Mask group.png" />
                    </div>
                    <div className='col-4'>
                        <div className="">
                            <p className='fs-60'><span className="text-primary">DSU</span> LIFE</p>
                        </div>
                        <Carousel className="h-50" responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />} infinite={true}>
                            <div className="mt-1">
                                <div>
                                    <p className='fs-20'>
                                        &quot;Our innovativeness will transform us into  a prominent leader of the digital disruption age.&quot;
                                    </p>
                                </div>
                                <div>
                                    <p className='fs-14'><span className="text-primary"> Nattawee Tantisatchatham</span> <br /> Founder Steps Academy</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div >
        </section >
    );
}