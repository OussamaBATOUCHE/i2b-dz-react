import React from 'react'
import { useTranslation } from "react-i18next";

const Valeurs = () => {
    const { t } = useTranslation();
  return (
    <>
    <section id='nosvaleurs' className="technology-v5 about-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="technology-v3-left">
                        <div className="ot-heading">
                            <span>{t("home.Valeurs.vision-performance")}</span>
                            <h2 className="main-heading">{t("home.Valeurs.valeurs-fondatrices")}</h2>
                        </div>
                        <div className="space-20"></div>
                        <div className="et-progress justify-text text-white">
                            <p>
                                {t("home.Valeurs.paragraph-1")}
                                <br /><br />
                                {t("home.Valeurs.paragraph-2")}
                                <br /> <br />
                                {t("home.Valeurs.paragraph-3")}
                            </p>            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 md-mt-30">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st1" >
                                <div className="overlay">
                                    <h4>{t("home.Valeurs.4-boxes-qualite")}</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/qualite.jpg`} alt="qualite" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st2" >
                                <div className="overlay">
                                    <h4>{t("home.Valeurs.4-boxes-innovation")}</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/innovation.jpg`} alt="innovation" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st3" >
                                <div className="overlay">
                                    <h4>{t("home.Valeurs.4-boxes-performance")}</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/performance.jpg`} alt="performance" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ot-image-box v3 st4 mb-0" >
                                <div className="overlay">
                                    <h4>{t("home.Valeurs.4-boxes-leadership")}</h4>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/leadership.jpg`} alt="leadership" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Valeurs