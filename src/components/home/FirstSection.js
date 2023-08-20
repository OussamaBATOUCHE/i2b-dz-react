import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { useTranslation } from "react-i18next";

const FirstSection = () => {
    const { t, i18n } = useTranslation();

  return (
    <>
        <section className="top-v5">
            <div className="">
                <div className="row margin-0-10" >
                    <div className="col-xl-6 col-lg-12 align-self-center">
                        <div className="top-left-v5">
                            <div className="ot-heading">
                                <span>{t("home.FirstSection.vision-performance")}</span>
                                <h2 className="main-heading">{t("home.FirstSection.integr-solu-infor-telec")}</h2>
                            </div>
                            <div className="ot-button">
                                {/* <a href="#site-footer" className="octf-btn octf-btn-primary">Nous Découvrir</a> */}
                                <HashLink className="octf-btn octf-btn-primary" to="/#quisommenous" smooth={true} reloadDocument>{t("home.FirstSection.nous-decouvrir")}</HashLink>
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
                            <video className="vid-in-laptop" style={i18n.dir() === 'rtl' ? {top:-70} : {}} src={`${process.env.PUBLIC_URL}/static/videos/vitrinei2b.mp4`} autoPlay={true} muted loop controls></video>
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
                                <img className='at' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-at-color.svg`} alt="algerie tenders" />
                            </div>
                        </div>
                        <div className='products-box border-sa'>
                            {t("home.FirstSection.at-text")}
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
                            {t("home.FirstSection.geo-text")}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="serv-box s1 v5 bg-s3">
                            <a href={"https://algeriainvest.com/"} className="overlay" target={'blank'}>-</a>
                            <div className="content-box">
                                <img className='ai' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-ai-color.svg`} alt="algeria invest" />
                            </div>
                        </div>
                        <div className='products-box border-s1'>
                            {t("home.FirstSection.ai-text")}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default FirstSection