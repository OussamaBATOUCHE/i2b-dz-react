import React from 'react'
import { useTranslation } from "react-i18next";
import { CLIENTS_LOGOS } from "../../constants"

const Clients = () => {
    const { t } = useTranslation();
    return (
    <>
    <div className="padding-half bg-light-1">
        <div className="container">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <h2 className="main-heading">{t("home.Clients.nos-partenaires")}</h2>              
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="partners">
                        <div className="owl-carousel owl-theme home-client-carousel">

                            {CLIENTS_LOGOS.map(c_logo => (
                                <div className="partners-slide">
                                    <a href="/" className="client-logo">
                                        <figure className="partners-slide-inner">
                                            <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/${c_logo}`} alt="i2b dz" />
                                        </figure>
                                    </a>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Clients