import React from 'react'

export const QuiSommesNous = () => {
  return (
    <>
        <section id='quisommenous' className="about-v5">
            <div className="overlay overlay-image-about5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-v5">
                            <div className="ot-heading">
                                <span>{"Plus de 20 années d'expérience"}</span>
                                <h2 className="main-heading">Qui Sommes-nous ?</h2>
                            </div>
                            <div className="tech-wrap">
                                <span className="tech-box">
                                    <div className="icon-main"><span className="flaticon-report-1"></span></div>
                                </span>
                                <span className="tech-box">
                                    <div className="icon-main"><span className="flaticon-placeholder-filled-point"></span></div>
                                </span>
                                <span className="tech-box">
                                    <div className="icon-main"><span className="flaticon-data"></span></div>
                                </span>
                                <span className="tech-box">
                                    <div className="icon-main"><span className="flaticon-shield"></span></div>
                                </span>
                            </div>
                            <p className='justify-text'> i2b SPA est une Société de Services en Ingénierie Informatique SSII, créée en 2002, un véritable intégrateur de solutions
                                dans le domaine des nouvelles technologies de l'informatique et des télécommunications, grâce à sa politique de 
                                développement qui consiste à investir dans d'autres créneaux à fort potentiel technologique. 
                                
                                i2b a mis en place un transfert technologique graduel et constant afin d'assurer une certaine indépendance vis-à-vis d'un 
                                approvisionnement extérieur par l'intégration des capacités techniques et des compétences nationales. 
                                
                                Actuellement, nous comptons quatre-vingt-treize (93) employés aux profils diverses, composés essentiellement de 
                                techniciens et d'ingénieurs développeurs (software & hardware). 
                                i2b couvre l'ensemble du le territoire national avec des bureaux sur Alger et Oran, avec de nombreux représentants au 
                                niveau de Sétif, Constantine, Bordj Bou Arreridj et Hassi-Mesaoud.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-v5">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/qsmns.png`} alt="i2b-dz" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default QuiSommesNous
