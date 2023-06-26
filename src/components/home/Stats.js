import React from 'react'
import { useTranslation } from "react-i18next";

const Stats = () => {
    const { t } = useTranslation();
  return (
    <>
        <section className="counter-v5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-6 no-padding">
                        <img src={`${process.env.PUBLIC_URL}/static/images/fun-fact1.jpeg`} alt="ff1" className="img-full" />
                    </div>
                    <div className="col-xl-3 col-lg-6 no-padding align-self-center">
                        <div className="ot-counter2">
                            <div className="s-num">
                                <span className="num" data-to="90" data-time="10000">0</span><span>+</span>
                            </div>
                            <h6>{t("home.Stats.collaborateurs")}</h6>
                            <p>{t("home.Stats.collaborateurs-text")}</p>
                            <div className="b-num">90+</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 order-lg-last no-padding">
                        <img src={`${process.env.PUBLIC_URL}/static/images/fun-fact2.jpeg`} alt="ff2" className="img-full" />
                    </div>
                    <div className="col-xl-3 col-lg-6 no-padding order-xl-last align-self-center">
                        <div className="ot-counter2">
                            <div className="s-num">
                                <span className="num" data-to="5000" data-time="10000">0</span><span>+</span>
                            </div>
                            <h6>{t("home.Stats.clients")}</h6>
                            <p>{t("home.Stats.clients-text")}</p>
                            <div className="b-num">5k</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Stats