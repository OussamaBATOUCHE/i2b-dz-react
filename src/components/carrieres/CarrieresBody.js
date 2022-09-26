import React from 'react'

function CarrieresBody() {
  return (
    <>
       <div id="content" className="site-content">
        
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src="/static/images/img/img-carrieres.jpg" alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <h2>Carrieres</h2>
                                <p className="sub-text">
                                    Si vous recherchez une atmosphère unique, une chance d'être la meilleure version de vous-même et de faire la différence, vous serez surpris par ce que i2b a à vous offrir.
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
                        
                        <div className="col-lg-6 align-self-center">
                            <div className="right-about-v4">
                                <div className="ot-heading">
                                    <span>Lancez votre carrière</span>
                                    <h2 className="main-heading">Rejoignez nous</h2>
                                </div>
                                <div className="space-5"></div>
                                <p>Depuis 2003, la fierté et l'enthousiasme que nous partageons tous chez i2b n'ont cessé de croître de façon spectaculaire, passant de 03 à plus de 80 collaborateurs.</p>
                                <p>Nous visons à atteindre l'exceptionnel, et pour ce faire, nos collaborateurs sont formés en continu pour trouver des solutions innovantes et révolutionnaires à tout un ensemble de défis lancés par nos clients.</p>
                                <p>Si vous recherchez une atmosphère unique, une chance d'être la meilleure version de vous-même et de faire la différence, vous serez surpris par ce que i2b a à vous offrir.</p>
                                <p><em className="text-dark"><strong>Vous souhaitez nous rejoindre ? envoyez-nous votre CV et lettre de motivation à l'adresse : recrutement@i2b-dz.com</strong></em></p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 align-self-center">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/img-join-us.png`} alt="" />
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

export default CarrieresBody