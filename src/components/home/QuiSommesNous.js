import React from 'react'
import { useTranslation } from "react-i18next";

export const QuiSommesNous = () => {
    const { t } = useTranslation();
  return (
    <>
        <section id='quisommenous' className="about-v5">
            <div className="overlay overlay-image-about5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-v5">
                            <div className="ot-heading">
                                <span>{t("home.QuiSommesNous.annees-experience")}</span>
                                <h2 className="main-heading">{t("home.QuiSommesNous.qui-sommes-nous")}</h2>
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
                            <p className='justify-text'>{t("home.QuiSommesNous.paragraph")}</p>
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
