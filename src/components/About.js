
export default function About() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="container">
        <div className="row posionit-relative">
          <div className="col-3 mb-n10">
            <p className="position-relative text-primary fs-160 z-1">
              CONNECT
              <br /> TECHNOLOGY
            </p>
          </div>
          <div className="col-9 offset-3">
            <div className="position-relative">
              <img src="/banner.png" alt="banner"/>
            </div>
          </div>
        </div>

        <div className="row posionit-relative mb-5 mt-5">
          <div className="col-3 d-flex">
            <img src="/art_01.png" alt="art" />
          </div>

          <div className="col-9">
            <p className="fs-60">connect for the better</p>
            <p className="fs-18">
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
            <button className="btn rounded-pill text-primary">
              More stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
