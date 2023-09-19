import React from 'react'
import { HashLink } from 'react-router-hash-link'
import CertificationsIso from './CertificationsIso'
import { useTranslation } from "react-i18next";

function QhseBody() {

    const { t, i18n } = useTranslation();
    const lagn_dir = i18n.dir()
    const iso_pdfs =   []
    if (lagn_dir === 'rtl') {
        iso_pdfs.push({id: 1, title:'ISO 9001:2015', img_path: '/static/files/iso/iso-9k.png', file_path:'/static/files/iso/iso-9k.png'});
        iso_pdfs.push({id: 2, title:'ISO 14001:2015', img_path: '/static/files/iso/iso-14k.png', file_path:'/static/files/iso/iso-14k.png'});
        iso_pdfs.push({id: 3, title: t("qhse.QhseBody.iso-pdfs.title-3"), img_path: '/static/files/politique-qhse-ar.png', file_path:'/static/files/politique-qhse-ar.png'});
    }else{
        iso_pdfs.push({id: 1, title:'ISO 9001:2015', img_path: '/static/files/iso/iso-9k.png', file_path:'/static/files/iso/iso-9k.png'});
        iso_pdfs.push({id: 2, title:'ISO 14001:2015', img_path: '/static/files/iso/iso-14k.png', file_path:'/static/files/iso/iso-14k.png'});
        iso_pdfs.push({id: 3, title: t("qhse.QhseBody.iso-pdfs.title-3"), img_path: '/static/files/politique-qhse.png', file_path:'/static/files/politique-qhse.png'});
    }

    
  return (
    <>
       <div id="content" className="site-content">
        
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/qhse.jpg`} alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <p className="small-text">{t("qhse.QhseBody.qualite-sante-securite-environnement")}</p>
                                <h2>QHSE</h2>
                                <p className="sub-text justify-text">
                                    {t("qhse.QhseBody.text-1")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id='qhseintro' className="app-offer">
                {/* <div className="overlay overlay-image"></div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/img-mngmnt.jpg`} alt="" />
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <div className="right-about-v4">
                                <div className="ot-heading">
                                    <span>{t("qhse.QhseBody.a-propos-societe")}</span>
                                    <h2 className="main-heading">{t("qhse.QhseBody.CertificationsIso.INTRODUCTION")}</h2>
                                </div>
                                <div className="space-5"></div>
                                <p>{t("qhse.QhseBody.introduction-text-1")}</p>
                                <p>
                                    <em className="text-dark">
                                        <strong>{t("qhse.QhseBody.introduction-text-2")}</strong>
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='qhseengagobjctf' className="section-business">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">{t("qhse.QhseBody.nos-engagements")}<br /></h2>
                            </div>
                            <ul className="">
                                <li> {t("qhse.QhseBody.engagements-li-1")}</li>
                                <li> {t("qhse.QhseBody.engagements-li-2")}</li>
                                <li> {t("qhse.QhseBody.engagements-li-3")}</li>
                                <li> {t("qhse.QhseBody.engagements-li-4")}</li>
                                <li> {t("qhse.QhseBody.engagements-li-5")}</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">{t("qhse.QhseBody.nos-objectifs")}<br /></h2>
                            </div>
                            <ul className="">
                                <li>{t("qhse.QhseBody.objectifs-li-1")}</li>
                                <li>{t("qhse.QhseBody.objectifs-li-2")}</li>
                                <li>{t("qhse.QhseBody.objectifs-li-3")}</li>
                                <li>{t("qhse.QhseBody.objectifs-li-4")}</li>
                                <li>{t("qhse.QhseBody.objectifs-li-5")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id='qhsehistorique' className="section-business-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">{t("qhse.QhseBody.historique")}<br /></h2>
                            </div>
                            <p className="mb-0">{t("qhse.QhseBody.historique-text-1")}</p>
                            <br />
                            <p className="mb-0">{t("qhse.QhseBody.historique-text-2")}</p>
                        </div>
                        <div className="col-lg-5">
                            <div className="ot-heading mb-0 mx-w-50">
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/isobgr.png`} alt="" /> 
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/bureau_veritas.png`} alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CertificationsIso />

            <section className="section-business-2">
                <div className="container">
                    <div className="row no-margin">
                    {iso_pdfs.map(pdf => (
                        <div key={pdf.id} className="col-lg-4 col-md-6">
                            <div className="team-wrap v3">
                                <div className="team-thumb img-hgt-300">
                                    <img src={ `${process.env.PUBLIC_URL}`+pdf.img_path} alt='i2b dz'/>                                 
                                    <div className="team-social flex-middle">
                                        <div>
                                            <a rel="nofollow noopener noreferrer" href={`${process.env.PUBLIC_URL}`+pdf.img_path} target='_blank' title={t("qhse.QhseBody.telecharger")}><i className="fa fa-download"></i> </a>
                                            <a rel="nofollow noopener noreferrer" href="/"  title={t("qhse.QhseBody.partager")}><i className="fa fa-share"></i></a>
                                        </div>
                                    </div>  
                                </div>
                                <div className="team-info">
                                    <h4>{pdf.title}</h4>
                                    <a rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}`+pdf.img_path} target='_blank'>{t("qhse.QhseBody.afficher")}</a>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default QhseBody