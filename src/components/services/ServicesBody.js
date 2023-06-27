import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from "react-i18next";

function ServicesBody() {
    const { t } = useTranslation();
  return (
    <>
       <div id="content" className="site-content">
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/services.jpg`} alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">

                                <p className="small-text"> {t("services.ServicesBody.vision-perfomance")} </p>
                                <h2> {t("services.ServicesBody.nos-services")} </h2>
                                <p className="sub-text"> {t("services.ServicesBody.solutions-innovantes-forte-valeurs")} </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-clent-h2">
                <div className="margin-0-5">

                    {/* AT */}
                    <div id='servicesat' className="section-inner-about">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                    <div className="left-img">
                                        <a href={"https://www.algeriatenders.com/"} target={'blank'} className='smaller-on-hover' title='visitez le site web'>
                                            <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/at.jpg`} alt="" />
                                        </a>
                                    </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading"> {t("services.ServicesBody.at")} </h2>
                                    </div>
                                    <p className='justify-text'> {t("services.ServicesBody.at-paragraph-1")} </p>
                                    <p className='justify-text'><em className="text-dark">
                                        <strong>
                                            {t("services.ServicesBody.at-paragraph-2")} 
                                        </strong></em>
                                    </p>
                                    <div className="space-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GEO */}
                    <div id='servicesgeo' className="section-inner-about">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading"> {t("services.ServicesBody.geo")} </h2>
                                    </div>
                                    <p className='justify-text'> {t("services.ServicesBody.geo-paragraph-1")} </p>
                                    <div className="space-20"></div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-img">
                                <a href={"https://www.geoflotte.com/"} target={'blank'} className='smaller-on-hover' title='visitez le site web'>
                                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/gf.jpg`} alt="" />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI */}
                    <div id='servicesai' className="section-inner-about">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="left-img">
                                <a href={"https://www.algeriainvest.com/"} target={'blank'} className='smaller-on-hover' title='visitez le site web'>
                                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/ai.jpg`} alt="" />
                                </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="right-content">
                                    <div className="ot-heading">
                                        <h2 className="main-heading">{t("services.ServicesBody.ai")}</h2>
                                    </div>
                                    <p className='justify-text'> {t("services.ServicesBody.ai-paragraph-1")} </p>
                                    <p className='justify-text'> {t("services.ServicesBody.ai-paragraph-2")} </p>
                                    <p className='justify-text'> {t("services.ServicesBody.ai-paragraph-3")} </p>
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
                                    <span className="text-primary-light"> {t("services.ServicesBody.technology-index")} </span>
                                    <h2 className="main-heading text-white"> {t("services.ServicesBody.ameliorer-innover-avec-tendances")} </h2>
                                </div>
                                <p> {t("services.ServicesBody.text")} </p>
                                <ul className="style-none text-white">
                                    <li><i className="fas fa-check"></i> {t("services.ServicesBody.invest-algerie")} </li>
                                    <li><i className="fas fa-check"></i> {t("services.ServicesBody.appels-offres")} </li>
                                    <li><i className="fas fa-check"></i> {t("services.ServicesBody.geolocalisation-gps")} </li>
                                    <li><i className="fas fa-check"></i> {t("services.ServicesBody.service-client-7-24")} </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center"  target="_blank">
                                        <div className="icon-main"><span className="flaticon-code-1"></span></div>
                                        <h5>WEB</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center" >
                                        <div className="icon-main"><span className="flaticon-android"></span></div>
                                        <h5>Android</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center" >
                                        <div className="icon-main"><span className="flaticon-apple"></span></div>
                                        <h5>IOS</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center mb-0" >
                                        <div className="icon-main"><span className="flaticon-iot"></span></div>
                                        <h5>IOT</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center mb-0" >
                                        <div className="icon-main"><span className="flaticon-time-and-date"></span></div>
                                        <h5>GPS</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="tech-box text-center mb-0" >
                                        <div className="icon-main"><span className="flaticon-tv"></span></div>
                                        <h5>Dashboards</h5>
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

export default ServicesBody