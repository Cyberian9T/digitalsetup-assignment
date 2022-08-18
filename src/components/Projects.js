import Image from 'next/image'

export default function Projects() {
    return (
        <div>
            <div className="d-flex justify-content-center m-5">
                <h1>our</h1>
                <h1>projects</h1>
            </div>
            <div className="d-flex justify-content-evenly">
                <div class="card" style={{ width: "18rem" }} >
                    <img src="/Sansiri.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sansiri</h5>
                        <p class="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }} >
                    <img src="/Bentagro.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Betagro</h5>
                        <p class="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }} >
                    <img src="/Mercedes Benz.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Mercedes Benz</h5>
                        <p class="card-text">Kubix is established by KASIKORN X, a company under KBTG, to operate as an Initial Coin Offering (ICO) portal. Broadening the horizon beyond....</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center m-5">
                <button type="button" class=" btn btn-light rounded-pill">All Project</button>
            </div>
        </div>
    );
}