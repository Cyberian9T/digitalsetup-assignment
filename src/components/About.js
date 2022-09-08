import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
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

const CustomDot = ({ onMove, index, onClick, active }) => {
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <li className={active ? "active" : "inactive"} onClick={() => onClick()}>
      <a className="bg-transparent border-0 mx-1">
        {active ? <img className="" src="/active.svg" alt="banner" />
          : <img className="" src="/inactive.svg" alt="banner" />}
      </a>
    </li>
  );
};

export default function About() {
  return (
    <section id="about" className="overflow-hidden py-8">
      <div className="container">
        <div className="position-relative z-1 mb-n9">
          <h1 className="text-primary fs-150 lh-1 hero">
            CONNECT TECHNOLOGY
          </h1>
        </div>
        <div className="offset-3 w-100">
          <Carousel
            className='w-100 carousel'
            responsive={responsive} arrows={false}
            renderButtonGroupOutside={true}
            infinite={true} showDots={true}
            autoPlay={true} autoPlaySpeed={2000}
            draggable={true} customDot={<CustomDot />}
            dotListClass="mb-3 justify-content-end end-25"
            customTransition="transform 800ms ease-in-out">

            <div className=''>
              <img className="img-fluid w-100" src="/banner.png" alt="banner" />
            </div>

            <div className=''>
              <img className='img-fluid flip-img w-100' src="/banner.png" alt="banner" />
            </div>

            <div className=''>
              <img className="img-fluid w-100" src="/banner.png" alt="banner" />
            </div>

            <div className=''>
              <img className='img-fluid flip-img w-100' src="/banner.png" alt="banner" />
            </div>

          </Carousel>


        </div>
      </div>
      <div className="container">
        <div className="row my-5 ">
          <div className="col-3 mt-7">
            <img className="h-75" src="/art_01.svg" alt="art" />
          </div>

          <div className="col-9">
            <p className="fs-60 mt-6">connect for the better</p>
            <p className="fs-18 my-7">
              At DSU, we never cease to develop and innovate financial
              technologies on top of our &quot;Customer First&quot; mindset, We
              are the driving force behind KBank&apos;s success as well as their
              navigator exploring the digital world beyond Thailand. Our
              wide-ranging online banking services are equipped with concrete
              infrastructure and strong barriers capable of guarding
              customers&apos; valuable assets and data. Utilizing our expertise
              in FinTech business, combined with new generation&apos;s
              outside-the-box thinking, KBTG aims to transform into the best
              tech organization of Southeast Asia.
            </p>
            <button className="btn btn-outline-primary rounded-pill border-0 shadow px-5 rounded">
              More stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
