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
                                <span>{"Plus de 20 années d'expérience"}</span>
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
                            <p>i2b SPA est une entreprise avec un potentiel de croissance élevé. 
                                La société a une politique de recrutement stable et sélective pour s'assurer d'embaucher les meilleurs talents. 
                                i2b SPA investit régulièrement dans la formation continue de ses collaborateurs pour qu'ils disposent des 
                                compétences nécessaires pour répondre aux besoins de l'entreprise. Avec un portefeuille client diversifié, 
                                i2b SPA est en mesure de générer des revenus stables et de faire face aux fluctuations économiques. 
                                La croissance continue de l'entreprise est soutenue par le développement de nouvelles applications pour répondre 
                                aux demandes de ses clients. En outre, i2b SPA s'engage à établir des partenariats durables et réels avec ses 
                                clients et toutes les institutions du pays, renforçant ainsi sa présence sur le marché. Cette approche garantit 
                                la réussite de l'entreprise à long terme.</p>
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
