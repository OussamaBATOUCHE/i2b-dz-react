import React from 'react'

function ServicesBody() {
  return (
    <>
       <div id="content" className="site-content">
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/bg_3.jpg`} alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <p className="small-text">Vision et performance</p>
                                <h2>NOS SERVICES</h2>
                                <p className="sub-text">
                                Solutions innovantes à forte Valeurs
                                </p>
                                
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
                                <span>Nous transformons les entreprises</span>
                                <h2 className="main-heading">Solutions innovantes  <br />à forte valeur ajoutée</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space-50"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="service-box s-box">
                                    <div className="icon-main color-s1"><span className="flaticon-correct"></span></div>
                                    <div className="content-box">
                                        <h5>ALGERIA TENDERS</h5>
                                        <p>Lorem Lorem Lorem</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="service-box s-box">
                                    <div className="icon-main color-s3"><span className="flaticon-correct"></span></div>
                                    <div className="content-box">
                                        <h5>GEOFLOTTE</h5>
                                        <p>Lorem Lorem Lorem</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="service-box s-box">
                                    <div className="icon-main color-s2"><span className="flaticon-correct"></span></div>
                                    <div className="content-box">
                                        <h5>ALGERIA INVEST</h5>
                                        <p>Lorem Lorem Lorem</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
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

                    <div className="section-inner-about">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="left-img">
                                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/gf.png`} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading">Votre partenaire pour <br />la Gestion de flotte!</h2>
                                    </div>
                                    <p>
                                    Geoflotte est une solution de géolocalisation GPS et de gestion de flotte de tous types de véhicules, 
                                    d'engins et d'équipements mobiles en temps réel, qui permet aux entreprises de suivre, de maîtriser, de 
                                    gérer et de sécuriser leur flotte pour augmenter leur productivité tout en optimisant leurs charges 
                                    logistiques.
                                    
                                    En 2008, i2b a obtenu l'autorisation et l'agrément d'exploitation du système de géolocalisation de l'ARPT 
                                    (aujourd'hui ARPCE). Grâce à cette stratégie de développement, i2b a acquis, depuis quelques années, une 
                                    position de leader sur le marché national.
                                    
                                    Dans un premier temps, i2b a importé cette solution, puis après avoir capitalisé de l'expérience et acquis 
                                    les connaissances nécessaires, elle a développé, grâce à son propre service R&D et aux efforts d'investissements 
                                    consentis, sa propre solution web de géolocalisation, (le hardware, le logiciel et la cartographie).
                                    </p>
                                    <div className="space-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-inner-about">
                        <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="left-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading">Votre partenaire pour <br />l'investissement en Algerie!</h2>
                                    </div>
                                    <p>
                                    Dans le cadre de sa stratégie de diversification, i2b a lancé, en juin 2021, Algeria INVEST® - première 
                                    plateforme digitale dédiée à l'investissement en Algérie. 
                                    </p>
                                    <p>
                                    Algeria INVEST® est un service d'information et d'accompagnement destiné à tous les acteurs économiques et aux investisseurs 
                                    nationaux et internationaux souhaitant investir en Algérie, leur fournissant toutes les données nécessaires à la réussite de 
                                    leurs projets.
                                    </p>
                                    <p>
                                    Algeria INVEST® répond aux besoins formulés par de nombreux investisseurs en recherche d'informations éclairées sur les circuits
                                    et les modalités d'investissements en Algérie. Figurent parmi les services d'accompagnement proposés, l'assistance à la création 
                                    d'entreprises, la représentation des sociétés étrangères, les études technico-économiques, les études de marchés, l'assistance 
                                    juridique, l'aide à l'exportation, le conseil et l'assistance dans les appels d'offres.
                                    </p>
                                    <div className="space-20"></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-img">
                                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/ai.png`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-inner-about">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="left-img">
                                        <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/at.png`} alt="" />
                                    </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading">Numéro 1 des <br />marchés publics!</h2>
                                    </div>
                                    <p>
                                        Plateforme digitale dédiée exclusivement à la recherche, à l'exploitation, et à la centralisation des 
                                        avis d'appels d'offres, nationaux et internationaux, ainsi qu'à la mise à la disposition des entreprises 
                                        des précisions et des indications ayant trait aux annonces publiées sur le territoire national 
                                        (avis d'attribution, d'infructuosité, de consultation, de prorogation, de vente aux enchères, et 
                                        d'autres) permettant ainsi à ses clients l'accès à toutes les opportunités du marché algérien.
                                    </p>
                                    <p><em className="text-dark">
                                        <strong>
                                            Aujourd'hui, avec une couverture de +500 sources d'information spécialisées avec le support d'une équipe qualifiée, 
                                            i2b est devenue une véritable référence du marché algérien pour +5000 entreprises nationales et internationales 
                                            (y compris non-résidentes) et dont le nombre ne cesse de croître.
                                        </strong></em>
                                    </p>
                                    <div className="space-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section-technology">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="technology-left">
                                <div className="ot-heading">
                                    <span className="text-primary-light">Technology index</span>
                                    <h2 className="main-heading text-white">Améliorer et innover avec les tendances technologiques</h2>
                                </div>
                                <p>Nos équipes peuvent vous aider à transformer votre entreprise grâce aux dernières capacités technologiques pour garder une longueur d'avance.</p>
                                <ul className="style-none text-white">
                                    <li><i className="fas fa-check"></i> Investissement en Algerie</li>
                                    <li><i className="fas fa-check"></i> Appels d'offre </li>
                                    <li><i className="fas fa-check"></i> Geolocalisation GPS</li>
                                    <li><i className="fas fa-check"></i> Service client 7/24</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center" href="web-development.html" target="_blank">
                                        <div className="icon-main"><span className="flaticon-code-1"></span></div>
                                        <h5>WEB</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center" href="mobile-development.html">
                                        <div className="icon-main"><span className="flaticon-android"></span></div>
                                        <h5>Android</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center" href="mobile-development.html">
                                        <div className="icon-main"><span className="flaticon-apple"></span></div>
                                        <h5>IOS</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center mb-0" href="it-services.html">
                                        <div className="icon-main"><span className="flaticon-iot"></span></div>
                                        <h5>IOT</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center mb-0" href="it-services.html">
                                        <div className="icon-main"><span className="flaticon-time-and-date"></span></div>
                                        <h5>GPS</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center mb-0" href="mobile-development.html">
                                        <div className="icon-main"><span className="flaticon-tv"></span></div>
                                        <h5>Dashboards</h5>
                                    </a>
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

export default ServicesBody