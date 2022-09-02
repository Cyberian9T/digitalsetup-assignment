import Image from "next/image";

export default function Career() {
  return (
    <section id="career" className="p-5" style={{ backgroundColor: "#F7FCFC" }}>
      <div className="container">
        <div className="mt-5">
          <h1>
            <span>jobs</span> st DSU
          </h1>
          <div className="row mb-4">
            <div className="col m-2 ">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-primary">Business Analyst</h5>
                  <h6 className="card-subtitle">
                    Muang Thong Thani, Nonthaburi
                  </h6>
                  <p className="card-text">
                    Through the robust training courses, closely coached by
                    expert mentors and rotating assignments which expose yours
                    to a broad
                  </p>
                </div>
              </div>
            </div>
            <div className="col m-2">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-primary">Data Engineer</h5>
                  <h6 className="card-subtitle">
                    Muang Thong Thani, Nonthaburi
                  </h6>
                  <p className="card-text">
                    At KBTG, we build our own platforms as well as service
                    external well-known clients like PTTEP, LINE, GRAB and so on
                    with an Open Platform technology structure.
                  </p>
                </div>
              </div>
            </div>
            <div className="col m-2">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title text-primary">
                    [KBTGVN] Function Lead/ Sr. Business Analyst
                  </h5>
                  <h6 className="card-subtitle">HCMC, Vietnam</h6>
                  <p className="card-text">
                    Functional Lead is the liaison between the business users
                    and technical team....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col m-2">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title">[KBTGVN] Software Engineer</h5>
                  <h6 className="card-subtitle">HCMC, Vietnam</h6>
                  <p className="card-text" style={{ color: "#61706F" }}>
                    At KBTG, we build our own platforms as well as service
                    external well-known clients like PTTOR, Facebook, LINE MAN,
                    GRAB, and many more with modernized ...
                  </p>
                </div>
              </div>
            </div>
            <div className="col m-2">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title">
                    [Samyan] KX - Software Engineer, Backend
                  </h5>
                  <h6 className="card-subtitle">Samyan, Bangkok</h6>
                  <p className="card-text text-dark">
                    We&apos;re looking for a passionate, self-motivated, team
                    player Backend ....
                  </p>
                </div>
              </div>
            </div>
            <div className="col m-2">
              <div className="card h-100">
                <div className="card-body p-3">
                  <h5 className="card-title">
                    [Samyan] KX - Software Engineer, Frontend
                  </h5>
                  <h6 className="card-subtitle">Samyan, Bangkok</h6>
                  <p className="card-text" style={{ color: "#61706F" }}>
                    We&apos;re looking for a passionate, self-motivated, team
                    player Frontend ....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button
              type="button"
              className=" btn btn-light rounded-pill text-white m-5"
            >
              View all Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
