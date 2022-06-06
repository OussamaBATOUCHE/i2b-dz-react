import React from 'react'

const NosSecteurs = () => {
  return (
    <>
        <section className="service-v5">
            <div className="container">
                <div className="row mt--70 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s1">
                            <a href={"https://www.algeriatenders.com/accueil"} className="overlay">-</a>
                        {/* <!--
                        <div className="icon-main"><img src="{% static 'images/i2bproducts/white/at-white.png' %}">
                        </div>
                        --> */}
                            <div className="content-box">
                                <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/white/at-white.png`} alt="at" />
                            </div>
                        </div>
                        <div className='products-box border-sa'>
                            La plateforme des marchés publics en Algérie.
                            Consultez toutes les annonces des marchés publics.
                            Saisissez et développez toutes les opportunités de croissance en Algérie
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s2">
                            <a href={"https://www.geoflotte.com/"} className="overlay">-</a>
                            <div className="icon-main">
                                <img className="gf" src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/white/gf-white.png`} alt="gf"/>
                            </div>
                            <div className="content-box">
                                <h5>Geoflotte</h5>
                            </div>
                        </div>
                        <div className='products-box border-s1'>
                            Solution de géolocalisation et de gestion de flotte de tous types de véhicules,
                            d'engins et d'équipements mobiles en temps réel, qui permet aux entreprises de suivre, de maîtriser,
                            de gérer et de sécuriser leur flotte
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s3">
                            <a href={"https://algeriainvest.com/"} className="overlay" target={'blank'}>-</a>
                            <div className="icon-main">
                                <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/white/ai-white.png`} alt="ai"/>
                            </div>
                            <div className="content-box">
                                <h5>Algeria Invest</h5>
                            </div>
                        </div>
                        <div className='products-box border-s1'>
                            Première plateforme pour l'investissement en Algérie qui regroupe
                            des opportunités d'affaires Nationales et Internationales et assure aux investisseurs un accompagnement adapté
                            dans des domaines d’activités variés

                        </div>
                    </div>
                </div>
                <div className="space-110"></div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="ot-heading">
                            <span>{'// NOS SECTEURS'}</span>
                            <h2 className="main-heading">Nos différents <br />secteurs d'activité </h2>
                        </div>
                    </div>
                </div>
                <div className="space-30"></div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="icon-box-s2 s2 border-s1 bg bg1 text-center">
                            <div className="icon-main"><span className="flaticon-code"></span></div>
                            <div className="content-box">
                                <h5><a href="/">Veille des marchés publics et privés</a></h5>
                                <p>Les annonces sont segmentées sur 32 secteurs d'activité,
                                ce qui vous permet de découvrir tous les besoins du marché algérien en temps réel</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="icon-box-s2 s2 border-s1 bg bg2 text-center">
                            <div className="icon-main"><span className="flaticon-app"></span></div>
                            <div className="content-box">
                                <h5><a href="/">Géolocalisation & Gestion de flottes</a></h5>
                                <p>BTPH & Chantiers, Santé & Pharmaceutique, Location de véhicules,
                                Transit & Distribution, Transport, Industrie & Commerce</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="icon-box-s2 s2 border-s1 bg bg3 text-center">
                            <div className="icon-main"><span className="flaticon-monitor"></span></div>
                            <div className="content-box">
                                <h5><a href="/">Accompagnement des investisseurs</a></h5>
                                <p>Les services sont regroupés en 4 catégories permettant de couvrir tous les
                                besoins en matière des Marchés, Finances, Conseil et Assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NosSecteurs