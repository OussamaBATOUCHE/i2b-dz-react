import React from 'react'

const Experts = () => {
  return (
    <>
        <section className="team-v5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="ot-heading">
                            <span>{"// Notre Equipe"}</span>
                            <h2 className="main-heading">Meet Our Experts</h2>
                        </div>
                        <div className="space-5"></div>
                        <p>Nous aidons les entreprises à augmenter leur rentabilité grâce
                        à des services personnalisés,<br/>assurés par une équipe expérimentée, réactive et à l'écoute.</p>
                        <div className="space-20"></div>
                    </div>
                </div>
                <div className="row no-margin">
                    {/* <!-- person one --> */}
                    <div className="col-lg-3 col-md-6 no-padding">
                        <div className="team-wrap v3">
                            <div className="team-thumb">
                                <img src={`${process.env.PUBLIC_URL}static/images/team/user1.jpg`} alt="u1" />
                                <div className="team-social flex-middle">
                                    <div>
                                        <a rel="nofollow" href="twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a rel="nofollow" href="linkedin.com" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        <a rel="nofollow" href="pinterest.com" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                        <a rel="nofollow" href="instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4>Amine Bennacef</h4>
                                <span>Co-Founder of company</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END person one --> */}

                    {/* <!-- person two --> */}
                    <div className="col-lg-3 col-md-6 no-padding">
                        <div className="team-wrap v3">
                            <div className="team-thumb">
                                <img src={`${process.env.PUBLIC_URL}static/images/team/user.jpg`} alt="u" />
                                <div className="team-social flex-middle">
                                    <div>
                                        <a rel="nofollow" href="twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a rel="nofollow" href="linkedin.com" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        <a rel="nofollow" href="pinterest.com" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                        <a rel="nofollow" href="instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4>Naim Midni</h4>
                                <span>Finance Manager</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END person two --> */}

                    {/* <!-- person three --> */}
                    <div className="col-lg-3 col-md-6 no-padding">
                        <div className="team-wrap v3">
                            <div className="team-thumb">
                                <img src={`${process.env.PUBLIC_URL}static/images/team/user.jpg`} alt="u" />
                                <div className="team-social flex-middle">
                                    <div>
                                        <a rel="nofollow" href="twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a rel="nofollow" href="linkedin.com" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        <a rel="nofollow" href="pinterest.com" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                        <a rel="nofollow" href="instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4>Billal Zidi</h4>
                                <span>Sales Manager AT-AI</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END person three --> */}

                    {/* <!-- person four --> */}
                    <div className="col-lg-3 col-md-6 no-padding">
                        <div className="team-wrap v3">
                            <div className="team-thumb">
                                <img src={`${process.env.PUBLIC_URL}static/images/team/user.jpg`} alt="u" />
                                <div className="team-social flex-middle">
                                    <div>
                                        <a rel="nofollow" href="twitter.com" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a rel="nofollow" href="linkedin.com" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                        <a rel="nofollow" href="pinterest.com" className="pinterest"><i className="fab fa-pinterest-p"></i></a>
                                        <a rel="nofollow" href="instagram.com" className="instagram"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h4>Salim Babaci</h4>
                                <span>Sales Manager Geo</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END person four --> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Experts