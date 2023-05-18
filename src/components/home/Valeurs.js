import React from 'react'

const Valeurs = () => {
  return (
    <>
    <section className="technology-v5 about-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="technology-v3-left">
                        <div className="ot-heading">
                            <span>{'Innovation, Performance et Fiabilité'}</span>
                            <h2 className="main-heading">Les valeurs fondatrices de notre entreprise</h2>
                        </div>
                        <div className="space-20"></div>
                        <div className="et-progress">
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Qualité: <br /> Notre engagement envers la qualité est démontré par nos certifications ISO, assurant à nos clients des services de qualité supérieure.</span>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Innovation: <br /> Une approche basé sur la volonté  de progresser  et de nous adapter aux TIC les plus récents.</span>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left">Performance: <br /> La satisfaction de nos clients envers nos services et la permanente collaboration.</span>
                                </div>
                            </div>
                            <div className="ot-progress">
                                <div className="overflow">
                                    <span className="pname f-left"> Leadership: <br />  esprit d'équipe solide, où chacun s'engagent à offrir des services de qualité, innovants et performants</span>
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