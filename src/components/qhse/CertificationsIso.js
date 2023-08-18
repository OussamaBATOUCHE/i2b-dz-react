import React from 'react';
import CertifIso from './page_components/CertifIso';
import { useTranslation } from "react-i18next";

const CertificationsIso = () => {
    const { t } = useTranslation();
    const nb_secteurs = [0, 1, 2, 3];
    const date_secteurs = [2014, 2017, 2020, 2021];
    const title_secteurs = t("qhse.QhseBody.CertificationsIso.title-secteurs")
    const li_items = [
                      ['ISO 9001 V2008', 'ISO 14001 V2004', 'OHSAS 18001 V2007'],
                      ['ISO 9001 V2015', 'ISO 14001 V2015', 'OHSAS 18001 V2007'],
                      ['ISO 9001 V2015', 'ISO 14001 V2015'],
                      ['ISO 9001 V2015', 'ISO 14001 V2015', 'ISO 45001 V2018']
                     ]
    const sec_icons = ['sec1.png', 'sec1.png', 'sec1.png']
    const sec_bckgrnd = ['icon-box-s2 bg1', 'icon-box-s2 bg2', 'icon-box-s2 bg3', 'icon-box-s2 bg3']
    return (
        <>            
            <section id='qhsecertifications' className="section-business">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ot-heading">
                                <span>{t("qhse.QhseBody.CertificationsIso.ce-que-nous-differencie")}</span>
                                <h2 className="main-heading">{t("qhse.QhseBody.CertificationsIso.certifications")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space-30"></div>
                    <div className="row">
                        {nb_secteurs.map(i => (
                            <CertifIso key={i}
                                       title={title_secteurs[i]}  
                                       context={li_items[i]} 
                                       icon={sec_icons[i]} 
                                       bckgrnd_img_cls={sec_bckgrnd[i]} 
                                       date={date_secteurs[i]}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CertificationsIso