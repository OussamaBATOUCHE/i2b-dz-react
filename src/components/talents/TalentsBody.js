import React from 'react'
import { HashLink } from 'react-router-hash-link'

function TalentsBody() {
  return (
    <>
       <div id="content" className="site-content">
        
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/talents.jpg`} alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <h2>Votre carrière chez i2b</h2>
                                <p className="sub-text">
                                    Les profils diversifiés de i2b forment une équipe dynamique qui s'attèle à offrir à nos clients des solutions
                                    innovantes en se basant sur des standards de qualité très élevés. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="service-v5 talents-s2" >
                <div className="container">
                    <div className="row mt--70 justify-content-center">

                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box bg-s2">
                                <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <h2 className='text-center'> 03 <br />business units</h2>    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box bg-s2">
                                <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <h2 className='text-center'>+96 <br />collaborateurs</h2>    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box bg-s2">
                                <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <h2 className='text-center'>+50 <br />formations continues</h2>    
                                </div>
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
                                    <h2 className="main-heading">Rejoignez-nous</h2>
                                </div>
                                <div className="space-5"></div>
                                <p className='justify-text'>
                                   i2b SPA est une entreprise avec un potentiel de croissance élevé. La société a une politique de recrutement stable et
                                   sélective pour s'assurer d'embaucher les meilleurs talents. i2b SPA investit régulièrement dans la formation continue 
                                   de ses collaborateurs pour qu'ils disposent des compétences nécessaires pour répondre aux besoins de l'entreprise.      
                                </p>
                                <p><em className="text-dark"><strong>Vous souhaitez nous rejoindre ? envoyez-nous votre CV et votre lettre de motivation à l'adresse : recrutement@i2b-dz.com</strong></em></p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0 align-self-center">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/talents2.jpg`} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-consultation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Notre  SAV est à votre disposition 24h/24 et 7/7</h2>
                            <div className="ot-button">
                                <HashLink to="/contact#top" reloadDocument className="octf-btn octf-btn-primary" >Nous contacter</HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default TalentsBody