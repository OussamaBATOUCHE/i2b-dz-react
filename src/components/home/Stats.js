import React from 'react'

const Stats = () => {
  return (
    <>
        <section className="counter-v5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 no-padding">
                        <img src={`${process.env.PUBLIC_URL}static/images/fun-fact1.jpeg`} alt="ff1" className="img-full" />
                    </div>
                    <div className="col-xl-3 col-lg-6 no-padding align-self-center">
                        <div className="ot-counter2">
                            <div className="s-num">
                                <span className="num" data-to="80" data-time="4000">0</span><span>+</span>
                            </div>
                            <h6>Collaborateurs</h6>
                            <p>Notre succès repose sur les efforts et l'engagement de nos collaborateurs qui partagent
                            la même identité et le même état d'esprit...</p>
                            <a href="about-us.html" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                            <div className="b-num">80+</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 order-lg-last no-padding">
                        <img src={`${process.env.PUBLIC_URL}static/images/fun-fact2.jpeg`} alt="ff2" className="img-full" />
                    </div>
                    <div className="col-xl-3 col-lg-6 no-padding order-xl-last align-self-center">
                        <div className="ot-counter2">
                            <div className="s-num">
                                <span className="num" data-to="5000" data-time="4000">0</span><span>+</span>
                            </div>
                            <h6>Clients</h6>
                            <p>Pour satisfaire nos clients, chaque solution proposée est parfaitement conçue pour s'adapter aux différents besoins exprimés...</p>
                            <a href="about-us.html" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                            <div className="b-num">5k</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Stats