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
                            <span>{'Innovation, Performance et Fiabilité'}</span>
                            <h2 className="main-heading">Les valeurs fondatrices de notre entreprise</h2>
                        </div>
                        <div className="space-5"></div>
                        <p>Une culture d'entreprise basée sur un esprit d'équipe solide. Nous mettons l'accent sur
                             la nécessité de repousser continuellement les frontières de notre expertise et notre maitrise des solutions proposées.</p>
                        <div className="space-20"></div>
                        <div className="et-progress">
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Qualité, Notre engagement envers la qualité est démontré par nos certifications ISO, assurant à nos clients des services de qualité supérieure et un taux de réabonnement de 95%.</span>
                                    <span className="ppercent f-right">95%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="70%"></div>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Innovation: Une approche basé sur la volonté  de progresser  et de nous adapter aux TIC les plus récents, pour obtenir un taux de nouveaux abonnements de +70%.</span>
                                    <span className="ppercent f-right">70%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="95%"></div>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Performance: La satisfaction de nos clients envers nos services et la permanente collaboration  engendrent un taux des extensions de services de 65%</span>
                                    <span className="ppercent f-right">65%</span>
                                </div>
                                <div className="iprogress">
                                    <div className="progress-bar" data-percent="65%"></div>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left"> Leadership: esprit d'équipe solide, où chacun s'engagent à offrir des services de qualité, innovants et performants</span>
                                    <span className="ppercent f-right">100%</span>
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
                            <div className="ot-image-box v3 st1" >
                                <div className="overlay">
                                    <h4>Qualité</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/mission.jpg`} alt="quality" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st2" >
                                <div className="overlay">
                                    <h4>Innovation</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/vision.jpg`} alt="innovation" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st3" >
                                <div className="overlay">
                                    <h4>Performance</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/philo.jpg`} alt="performance" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st4 mb-0" >
                                <div className="overlay">
                                    <h4>Leadership</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/strategie.jpg`} alt="leadership" />
                            </div>
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