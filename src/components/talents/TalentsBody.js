import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from "react-i18next";

function TalentsBody() {
    const { t } = useTranslation();
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
                                <h2>{t("talents.TalentsBody.carriere-i2b")}</h2>
                                <p className="sub-text">
                                    {t("talents.TalentsBody.text-1")}
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
                                    <h2 className='text-center'>+96 <br />{t("talents.TalentsBody.collaborateurs")}</h2>    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box bg-s2">
                                <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <h2 className='text-center'>+50 <br />{t("talents.TalentsBody.formations-continues")}</h2>    
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
                                    <span>{t("talents.TalentsBody.lancez-votre-carriere")}</span>
                                    <h2 className="main-heading">{t("talents.TalentsBody.rejoignez-nous")}</h2>
                                </div>
                                <div className="space-5"></div>
                                <p className='justify-text'>{t("talents.TalentsBody.text-2")}</p>
                                <p><em className="text-dark"><strong>{t("talents.TalentsBody.text-3")}</strong></em></p>
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
                            <h2>{t("services.ServicesBody.notre-sav-disposition")}</h2>
                            <div className="ot-button">
                                <HashLink to="/contact#top" reloadDocument className="octf-btn octf-btn-primary" >{t("services.ServicesBody.nous-contacter")}</HashLink>
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