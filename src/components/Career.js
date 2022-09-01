import Image from 'next/image'

export default function Career() {
    return (
        <section id='career' style={{ backgroundColor: '#F7FCFC' }}>
            <div className="container">
                <div className="m-5">
                    <h1>
                        <span style={{ color: '#1ED0BD' }} >jobs</span> st DSU
                    </h1>
                    <div className="row">
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>Business Analyst</h5>
                                    <h6 className="card-subtitle">Muang Thong Thani, Nonthaburi</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>Through the robust training courses, closely coached by expert mentors and rotating assignments which expose yours to a broad</p>
                                </div>
                            </div>
                        </div>
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>Data Engineer</h5>
                                    <h6 className="card-subtitle">Muang Thong Thani, Nonthaburi</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>At KBTG, we build our own platforms as well as service external well-known clients like PTTEP, LINE, GRAB and so on with an Open Platform technology structure.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>[KBTGVN] Function Lead/ Sr. Business Analyst</h5>
                                    <h6 className="card-subtitle">HCMC, Vietnam</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>Functional Lead is the liaison between the business users and technical team....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>[KBTGVN] Software Engineer</h5>
                                    <h6 className="card-subtitle">HCMC, Vietnam</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>At KBTG, we build our own platforms as well as service external well-known clients like PTTOR, Facebook, LINE MAN, GRAB, and many more with modernized ...</p>
                                </div>
                            </div>
                        </div>
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>[Samyan] KX - Software Engineer, Backend</h5>
                                    <h6 className="card-subtitle">Samyan, Bangkok</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>We&apos;re looking for a passionate, self-motivated, team player Backend ....</p>
                                </div>
                            </div>
                        </div>
                        <div className='col m-2'>
                            <div className="shadow card h-100" style={{
                                background: 'rgba(247, 252, 252, 0.8)',
                                boxShadow: '15px 15px 20px rgba(57, 124, 116, 0.08), -15px -15px 20px rgba(255, 255, 255, 0.7)',
                                borderRadius: '30px'
                            }}>
                                <div className="card-body p-3">
                                    <h5 className="card-title" style={{ color: '#1ED0BD' }}>[Samyan] KX - Software Engineer, Frontend</h5>
                                    <h6 className="card-subtitle">Samyan, Bangkok</h6>
                                    <p className="card-text" style={{ color: '#61706F' }}>We&apos;re looking for a passionate, self-motivated, team player Frontend ....</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <button type="button" className=" btn btn-light rounded-pill m-5" style={{ background: '#1ED0BD', color: '#ffffff' }}>View all Jobs</button>
                    </div>
                </div>
            </div>
        </section>

    );
}