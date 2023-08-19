import React from 'react'
import { useTranslation } from "react-i18next";

const Vision = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    
  return (
    <>
    <section id='notrevision' className="section-vision">
        <div className="container">
            <div className="row">
                <div className= {i18n.dir() === 'rtl' ? 'col-md-6 col-sm-12 mission-vision-separation' : 'col-md-6 col-sm-12 mb-4 mb-md-0 '}>
                    <div className="misc-box text-white misc-box-bg-tr">
                        <div className="ot-heading">
                            <div>
                                <h2 className="main-heading"> {t("home.Vision.mission")}</h2>
                            </div>                    
                        </div>
                        <p className='et-progress justify-text'>{t("home.Vision.mission-text")}</p>
                    </div>
                </div>
                <div className= {i18n.dir() === 'rtl' ? 'col-md-6 col-sm-12 mb-4 mb-md-0' : 'col-md-6 col-sm-12 mission-vision-separation'} >
                    <div className="misc-box misc-box-bg-tr">
                        <div className="ot-heading">
                            <div>
                                <h2 className="main-heading">{t("home.Vision.vision")}</h2>
                            </div>                    
                        </div>
                        <p className='et-progress justify-text'>{t("home.Vision.vision-text")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </> 
   )
}
export default Vision