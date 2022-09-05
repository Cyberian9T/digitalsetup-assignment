export default function Projects() {
    return (
        <section id='projects' className="p-5 overflow-hidden">
            <div className="container mt-5 mb-5">
                <div className="row m-3">
                    <p className="text-center fs-60">our <span className='text-primary'>projects</span></p>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="cardshadow col-3 m-3">
                        <img src="/Sansiri.png" className="card-img-top" alt="..."/>
                        <div className="card-body p-3">
                            <p className="card-title fs-26">Sansiri</p>
                            <p className="card-subtitle fs-14 mb-2 text-primary" >Digital Token for Everyone</p>
                            <p className="card-text fs-14">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                    <div className="cardshadow col-3 m-3" >
                        <img src="/Bentagro.png" className="card-img-top" alt="..."/>
                        <div className="card-body p-3">
                            <p className="card-title fs-26">Betagro</p>
                            <p className="card-subtitle fs-14 mb-2 text-primary" >Digital Token for Everyone</p>
                            <p className="card-text fs-14">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                    <div className="cardshadow col-3 m-3" >
                        <img src="/Mercedes Benz.png" className="card-img-top" alt="..."/>
                        <div className="card-body p-3">
                            <p className="card-title fs-26">Mercedes Benz</p>
                            <p className="card-subtitle fs-14 mb-2 text-primary" >Digital Token for Everyone</p>
                            <p className="card-text fs-14">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5" >
                    <button type="button" className="btn btn-primary text-light rounded-pill">All Project</button>
                </div>
            </div>
        </section>
    );
}