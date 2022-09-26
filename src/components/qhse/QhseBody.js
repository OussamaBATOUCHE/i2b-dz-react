import React from 'react'

function QhseBody() {
  return (
    <>
       <div id="content" className="site-content">
        
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src="/static/images/img/bg_4.jpg" alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <p className="small-text">Quality - Health - Safety  - Environment</p>
                                <h2>QHSE</h2>
                                <p className="sub-text">
                                i2b SPA a décidé de se distinguer à travers une démarche de certification et d'amélioration constante de son système de management intégré (QHSE)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="app-offer">
                {/* <div className="overlay overlay-image"></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/img-mngmnt.jpg`} alt="" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="right-about-v4">
                                <div className="ot-heading">
                                    <span>À PROPOS DE LA SOCIÉTÉ</span>
                                    <h2 className="main-heading">Système de management <br />Qualité - Environnement</h2>
                                </div>
                                <div className="space-5"></div>
                                <p>Afin de garantir à ses clients des services à la hauteur de leurs attentes, i2b s'est engagée dans une démarche d'amélioration Qualité, et Environnement par la mise en œuvre d'un système de management, certifié par l'organisme VERITAS selon les référentiels ISO 9001(Qualité), ISO 14001 (Environnement) depuis 2014, à ce jour.</p>
                                <p><em className="text-dark"><strong>Cette double certification couvrant l'ensemble de ses sites et activités, représente un réel gage de fiabilité pour ses clients, partenaires et fournisseurs, en témoignant de l'engagement d'i2b à fournir des services de qualité, tout en assurant la protection de l'environnement.</strong></em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-business">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ot-heading mb-0">
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/img-quality.jpg`} alt="" /> 
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">QUALITY<br /></h2>
                            </div>
                            <p className="mb-0">
                                La démarche Qualité d'i2b vise à apporter à ses clients une valeur d'usage substantielle dans le domaine des services avec le meilleur niveau de service. La société est dans la recherche systématique de la pleine satisfaction de ses clients, en restant en permanence à l'écoute de leurs besoins
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-business-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">ENVIRONNEMENT<br /></h2>
                            </div>
                            <p className="mb-0">
                                i2b SPA intègre depuis plusieurs années le respect de l'environnement à sa stratégie de développement et inscrit par ailleurs son action dans une perspective de diminution de son impact environnemental.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <div className="ot-heading mb-0">
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/img-enrmt.png`} alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-business">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ot-heading mb-0">
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/img-health.jpg`} alt="" /> 
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">Santé et securité<br /></h2>
                            </div>
                            <p className="mb-0">
                                La sécurité c'est l'affaire de tous, i2b SPA a rassemblé tous les risques et a fédéré l'ensemble des acteurs au tour d'un objectif commun, celui de travailler dans un milieu sain La santé au travail est un droit fondamental. Tout travailleur a le droit d'évaluer dans un environnement professionnel sain
                            </p>
                        </div>
                    </div>
                    <div className="space-50"></div>
                </div>
            </section>

            <section className="section-clent-h2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="partners">
                                <div className="owl-carousel owl-theme home-client-carousel">
                                    <div className="partners-slide">
                                        <a href="/" className="client-logo">
                                            <figure className="partners-slide-inner">
                                                <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/sarens.png`} alt="" />
                                            </figure>                             
                                        </a>
                                    </div>
                                    <div className="partners-slide">
                                        <a href="/" className="client-logo">
                                            <figure className="partners-slide-inner">
                                                <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/zoomlion.png`} alt="" />
                                            </figure>                             
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section-consultation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Écrivez-nous! Nous sommes là pour répondre à vos questions 24h/24 et 7j/7</p>
                            <h2>BESOIN D'UNE CONSULTATION ?</h2>
                            <div className="ot-button">
                                <a href="/" className="octf-btn octf-btn-primary">Nous contacter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default QhseBody