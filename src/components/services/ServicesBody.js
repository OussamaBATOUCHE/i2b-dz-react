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
                            <img src="/static/images/img/bg_3.jpg" alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <p className="small-text">Fonctionnel, convivialité et performances</p>
                                <h2>NOS SERVICES</h2>
                                <p className="sub-text">
                                i2b a plus d'une corde dans son arc, elle s'est toujours attelée à chercher des solutions innovantes de pointe.
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
                        <div className="col-lg-7 align-self-end">
                            <p className="mb-0">
                              i2b a plus d'une corde dans son arc, elle s'est toujours attelée à chercher des solutions innovantes de pointe. Parmi ses fleurons, on cite :
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-clent-h2">
                <div className="container">
                    <div className="row mt--290 justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                            <div className="support-box">
                                <div className="inner-box">
                                    <div className="overlay flex-middle">
                                        <span className="number-box">01</span>
                                        <div className="inner">
                                            <p>Algeria Tenders : numéro 1 des appels d'offres en Algérie, Algeria Tenders propose une solution simple, exhaustive, et facile à utiliser et dont l'information est quotidienne, fiable et pertinente.</p>
                                            <a href="/" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <span className="number-box">01</span>
                                        <h3>Algeria Tenders</h3>
                                        <img className="img-box-blur" src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/at.png`} alt="algeria tenders i2b" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                            <div className="support-box">
                                <div className="inner-box">
                                    <div className="overlay flex-middle">
                                        <span className="number-box">02</span>
                                        <div className="inner">
                                            <p>Solution de géolocalisation et de gestion de flotte de tous types de véhicules, engins et équipements mobiles en temps réel, qui permet aux entreprises de suivre, de gérer et de sécuriser leur flotte pour augmenter leur productivité.</p>
                                            <a href="/" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <span className="number-box">02</span>
                                        <h3>GeoFlotte</h3>
                                        <img className="img-box-blur" src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/gf.png`} alt="geoflotte i2b" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="support-box">
                                <div className="inner-box">
                                    <div className="overlay flex-middle">
                                        <span className="number-box">03</span>
                                        <div className="inner">
                                            <p>Première plateforme digitale dédiée à l'investissement en Algérie. Un portail d'information et d'accompagnement pour les acteurs économiques nationaux et internationaux qui souhaitent investir en Algérie.</p>
                                            <a href="/" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <span className="number-box">03</span>
                                        <h3>Algeria Invest</h3>
                                        <img className="img-box-blur" src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/ai.png`} alt="algeria inverst i2b" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-90"></div>
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
                                        <span>À propos des services</span>
                                        <h2 className="main-heading">Votre partenaire pour <br />la Gestion de flotte!</h2>
                                    </div>
                                    <p>Solution de géolocalisation et de gestion de flotte de tous types de véhicules, engins et équipements mobiles en temps réel, qui permet aux entreprises de suivre,
                                         de maîtriser, de gérer et de sécuriser leur flotte pour augmenter leur productivité tout en optimisant leurs charges logistiques. <br />
                                        Plus de 12 000 boitiers pour tout type de véhicules ont été installés à ce jour et plus de 2000 clients utilisent notre solution.</p>
                                    <p><em className="text-dark"><strong>Nous pouvons vous aider à maintenir et à moderniser votre infrastructure informatique et à résoudre divers problèmes spécifiques à l'infrastructure auxquels une entreprise peut être confrontée.</strong></em></p>
                                    <div className="space-20"></div>
                                    <div className="ot-button">
                                        <a href="/" className="octf-btn octf-btn-primary">LIRE LA SUITE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-inner-about">
                        <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="left-content">
                                    <div className="ot-heading">
                                        <span>À propos des services</span>
                                        <h2 className="main-heading">Votre partenaire pour <br />l'investissement en Algerie!</h2>
                                    </div>
                                    <p>première plateforme digitale dédiée à l'investissement en Algérie. Un portail d'information et d'accompagnement pour les acteurs économiques nationaux et internationaux qui souhaitent investir en Algérie.<br />
                                        Algeria INVEST leur propose un accès privilégié à toutes les données nécessaires pour la réussite de leur projet.</p>
                                    <p><em className="text-dark"><strong>Nous pouvons vous aider à maintenir et à moderniser votre infrastructure informatique et à résoudre divers problèmes spécifiques à l'infrastructure auxquels une entreprise peut être confrontée.</strong></em></p>
                                    <div className="space-20"></div>
                                    <div className="ot-button">
                                        <a href="/" className="octf-btn octf-btn-primary">LIRE LA SUITE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-img">
                                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/ai.png`} alt="" />
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
                                    <li><i className="fas fa-check"></i> Application Development</li>
                                    <li><i className="fas fa-check"></i> BI Consulting and Implementation</li>
                                    <li><i className="fas fa-check"></i> Machine and Deep Learning</li>
                                    <li><i className="fas fa-check"></i> Data Quality Management</li>
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
                                        <h5>Wearalables</h5>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <a className="tech-box text-center mb-0" href="mobile-development.html">
                                        <div className="icon-main"><span className="flaticon-tv"></span></div>
                                        <h5>TV</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-industris">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <div className="ot-heading">
                            <span>LAST NEWS</span>
                            <h2 className="main-heading">Consultez nos <br />dernières nouvelles</h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="ot-industries">
                        <div className="owl-carousel owl-theme industries-inner ot-industries-slider">

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Business & Finance</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Gaming & Enterteinment</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Information Technology</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Retail & Distribution</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Business & Finance</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Gaming & Enterteinment</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Information Technology</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="indus-item">
                                <div className="item-inner">
                                    <div className="overlay"></div>
                                    <div className="i-image">
                                        <img src="https://via.placeholder.com/139x141.png" alt="" />
                                    </div>
                                    <div className="iinfo">
                                        <h6>Retail & Distribution</h6>
                                        <div className="itext">
                                            The global economy is moving towards a new identity. In order to remain competitive and profitable, the banking and finance.
                                        </div>
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

export default ServicesBody