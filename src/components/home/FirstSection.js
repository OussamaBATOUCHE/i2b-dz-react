import React from 'react'

const FirstSection = () => {
  return (
    <>
        <section className="top-v5">
            <div className="container">
                <div className="row margin-left-m145" >
                    <div className="col-xl-6 col-lg-12 align-self-center">
                        <div className="top-left-v5">
                            <div className="ot-heading">
                                <span>Vision et performance</span>
                                <h2 className="main-heading justify-text">Intégrateur de Solutions Informatiques & Télécommunications</h2>
                            </div>
                            <div className="ot-button">
                                <a href="#site-footer" className="octf-btn octf-btn-primary">Nous Découvrir</a>
                            </div>
                            {/* <div className="video-popup style-3">
                            <div className="btn-inner">
                            <a className="btn-play" href="{% static 'videos/vitrinei2b.mp4'%}"><i className="flaticon-play"></i>
                            <span className="circle-1"></span>
                            <span className="circle-2"></span>
                            </a>
                            </div>
                            <span>vidéo vitrine</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="top-right-v5">
                            {/* <img src={`${process.env.PUBLIC_URL}/static/images/img/image-banner-home5.png`} alt='bkg-img' style={{mixBlendMode: 'screen'}} /> */}            
                            <video className="vid-in-laptop" src={`${process.env.PUBLIC_URL}/static/videos/vitrinei2b.mp4`} autoPlay={true} muted loop controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="service-v5">
            <div className="container">
                <div className="row mt--70 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s1">
                            <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                            <div className="content-box">
                                <img className='at' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-at-color.png`} alt="algerie tenders" />
                            </div>
                        </div>
                        <div className='products-box border-sa'>
                            La plateforme des marchés publics en Algérie.
                            Consultez toutes les annonces des marchés publics.
                            Saisissez et développez toutes les opportunités de croissance en Algérie.
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s2">
                            <a href={"https://www.geoflotte.com/"} className="overlay" target={'blank'}>-</a>
                            <div className="content-box">
                                <img className="gf" src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-gf-color.png`} alt="geoflotte" />
                            </div>
                        </div>
                        <div className='products-box border-s1'>
                            Solution de géolocalisation et de gestion de flotte de tous types de véhicules,
                            d'engins et d'équipements mobiles en temps réel, qui permet aux entreprises de suivre, de maîtriser,
                            de gérer et de sécuriser leur flotte.
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s3">
                            <a href={"https://algeriainvest.com/"} className="overlay" target={'blank'}>-</a>
                            <div className="content-box">
                                <img className='ai' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-ai-color.png`} alt="algeria invest" />
                            </div>
                        </div>
                        <div className='products-box border-s1'>
                            Première plateforme pour l'investissement en Algérie qui regroupe
                            des opportunités d'affaires Nationales et Internationales et assure aux investisseurs un accompagnement adapté
                            dans des domaines d'activités variés.
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default FirstSection