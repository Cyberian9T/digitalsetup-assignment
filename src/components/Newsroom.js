import Image from 'next/image'

export default function Newsroom() {
    return (
        <div className="row">
            <div className="col">
                <h1>our</h1>
                <h1>newsroom</h1>
            </div>
            <div className="col">
                <div class="card" style={{ width: "18rem" }} >
                    <Image src="/card 1.png" class="card-img-top" alt="..." width={498} height={334} />
                    <div class="card-body">
                        <h5 class="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                        <p class="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }} >
                    <Image src="/card 2.png" class="card-img-top" alt="..." width={498} height={334} />
                    <div class="card-body">
                        <h5 class="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                        <p class="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }} >
                    <Image src="/card 3.png" class="card-img-top" alt="..." width={498} height={334} />
                    <div class="card-body">
                        <h5 class="card-title">we never cease to develop and innovate financialtechnologies on top.</h5>
                        <p class="card-text">At KBTG, we never cease to develop and innovate financial technologies on top of our “Customer First” .</p>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-light rounded-pill">All News</button>
        </div>
    );
}