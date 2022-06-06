import React from 'react'

export const Parcours = () => {
  return (
    <>
        <section className="about-v5">
            <div className="overlay overlay-image-about5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-v5">
                            <div className="ot-heading">
                                <span>{"// Plus de 20 années d'expérience"}</span>
                                <h2 className="main-heading">Notre parcours</h2>
                            </div>
                            <div className="tech-wrap">
                                <a className="tech-box" href="/">
                                    <div className="icon-main"><span className="flaticon-report-1"></span></div>
                                </a>
                                <a className="tech-box" href="/">
                                    <div className="icon-main"><span className="flaticon-placeholder-filled-point"></span></div>
                                </a>
                                <a className="tech-box" href="/">
                                    <div className="icon-main"><span className="flaticon-data"></span></div>
                                </a>
                                <a className="tech-box" href="/">
                                    <div className="icon-main"><span className="flaticon-shield"></span></div>
                                </a>
                            </div>
                            <p>Notre histoire a commencé en 2002, l'année de création de la première plateforme dédiée aux avis d'appels
                                d'offres en Algérie, dans le but de digitaliser les différentes annonces des marchés publics publiées
                                dans les journaux et de donner par la suite la possibilité de les suivre en ligne.
                                Cette idée s'est rapidement développée avec succès, ce qui nous a incités à élargir notre champ d'expertise
                                en investissant dans d'autres créneaux à fortes potentialités technologiques, en offrant de nouvelles solutions
                                innovantes dans différents domaines d'activité</p>
                            <div className="ot-button">
                                <a href="/" className="btn-details"><i className="flaticon-right-arrow-1"></i> LIRE LA SUITE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-v5">
                            <img src={`${process.env.PUBLIC_URL}/static/images/image1-home5.png`} alt="home5" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Parcours
