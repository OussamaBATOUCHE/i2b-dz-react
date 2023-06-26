import React from 'react'
import { useTranslation } from "react-i18next";
import { ALL_CLOGOS } from "../../constants/index"

const LargeClients = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className="padding-half">
        <div className="container">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <h2 className="main-heading">{t("home.Clients.nos-partenaires")}</h2>              
                    </div>
                </div>
                <div className="space-20"></div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="partners">

                        {ALL_CLOGOS.map(cslogo => (
                            <div key={ALL_CLOGOS.length+cslogo.length} className="row">
                            {cslogo.map(c_logo => (
                                <div key={c_logo} className={'col-md-'+(12/cslogo.length)}>
                                    <a href="/" className="client-logo">
                                        <figure className="partners-slide-inner">
                                            <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/${c_logo}`} alt="i2b dz" />
                                        </figure>
                                    </a>
                                </div>
                            ))}
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LargeClients
