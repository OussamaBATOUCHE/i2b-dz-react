import React from 'react'

const Valeurs = () => {
  return (
    <>
    <section id='nosvaleurs' className="technology-v5 about-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="technology-v3-left">
                        <div className="ot-heading">
                            <span>{'Innovation, Performance et Fiabilité'}</span>
                            <h2 className="main-heading">Les valeurs fondatrices de notre entreprise</h2>
                        </div>
                        <div className="space-20"></div>
                        <div className="et-progress justify-text text-white">
                            <p>
                                Notre entreprise se distingue par son engagement envers la qualité, la performance, le leadership et l'innovation. 
                                Ces valeurs fondamentales créent un environnement propice à l'épanouissement des employés et au succès de nos projets.
                                <br /><br />
                                Grâce à notre culture axée sur l'amélioration continue, nous visons à anticiper les besoins changeants de nos clients et
                                à apporter des solutions novatrices à leurs défis les plus complexes.
                                <br /> <br />
                                Nous mettons en valeur la créativité de chaque membre de notre équipe, lui permettant de à contribuer activement et de 
                                jouer un rôle clé dans la réalisation de notre vision commune. En cultivant une atmosphère d'ouverture et de collaboration, 
                                nous favorisons l'épanouissement professionnel et personnel de nos employés, ce qui se reflète dans la qualité de notre 
                                travail et la satisfaction de nos clients.
                            </p>            
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
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/qualite.jpg`} alt="qualite" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st2" >
                                <div className="overlay">
                                    <h4>Innovation</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/innovation.jpg`} alt="innovation" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st3" >
                                <div className="overlay">
                                    <h4>Performance</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/performance.jpg`} alt="performance" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st4 mb-0" >
                                <div className="overlay">
                                    <h4>Leadership</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/leadership.jpg`} alt="leadership" />
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