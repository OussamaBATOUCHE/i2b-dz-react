import React from 'react'

const Valeurs = () => {
  return (
    <>
    <section className="technology-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="technology-v3-left">
                        <div className="ot-heading">
                            <span>{'// Innovation, Performance et Fiabilité'}</span>
                            <h2 className="main-heading">Les valeurs fondatrices de notre entreprise</h2>
                        </div>
                        <div className="space-5"></div>
                        <p>Une culture d'entreprise basée sur un esprit d'équipe solide. Nous mettons l'accent sur
                             la nécessité de repousser continuellement les frontières de notre expertise et notre maitrise des solutions proposées.</p>
                        <div className="space-20"></div>
                        <div className="et-progress">
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Taux des nouveaux abonnements</span>
                                    <span className="ppercent f-right">70%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="70%"></div>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Taux des réabonnements</span>
                                    <span className="ppercent f-right">95%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="95%"></div>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Taux des extensions de services</span>
                                    <span className="ppercent f-right">65%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="65%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 md-mt-30">
                    <div className="row">
                        <div className="col-md-6">
                            <a className="ot-image-box v3 st1" href="it-services.html">
                                <div className="overlay">
                                    <h4>Notre mission</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}static/images/img/mission.jpg`} alt="Notre mission" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a className="ot-image-box v3 st2" href="it-services.html">
                                <div className="overlay">
                                    <h4>Notre vision</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}static/images/img/vision.jpg`} alt="Notre vision" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a className="ot-image-box v3 st3" href="it-services.html">
                                <div className="overlay">
                                    <h4>Notre Philosophie</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}static/images/img/philo.jpg`} alt="Notre Philosophie" />
                            </a>
                        </div>
                        <div className="col-md-6">
                            <a className="ot-image-box v3 st4 mb-0" href="it-services.html">
                                <div className="overlay">
                                    <h4>Notre stratégie</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}static/images/img/stratégie.jpg`} alt="Notre stratégie" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Valeurs