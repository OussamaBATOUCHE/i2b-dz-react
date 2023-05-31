import React from 'react'
import Clients from '../home/Clients'
import CertificationsIso from './CertificationsIso'

function QhseBody() {
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
                                <p className="small-text">Qualité - Santé - Sécurité  - Environnement</p>
                                <h2>QHSE</h2>
                                <p className="sub-text justify-text">
                                    Adopter et pronouvoir un comportement intègre et éthique dans l'ensemble de ses relations avec tous ses partenaires est
                                    un engagement fort de i2b SPA. Ce principe a conduit le Groupe à définir des règles de conduite et des principes d'action
                                    qui guident le comportement de l'ensemble de collaborateurs, des founisseurs et autres parties prenantes, en matière d'éthique,
                                    de responsabilité environnementale. sociale et sociétale.
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
                                    <span>À PROPOS DE LA SOCIÉTÉ</span>
                                    <h2 className="main-heading">INTRODUCTION</h2>
                                </div>
                                <div className="space-5"></div>
                                <p>
                                La SPA i2b, intégrateur de solutions informatiques, est une société innovante qui exerce dans 
                                le secteur de la technologie de l'information et celui des télécommunications depuis 2002.
                                </p>
                                <p><em className="text-dark">
                                    <strong>
                                        Consciente du développement du marché des Nouvelles Technologies de l'information & de la Communication i2B a
                                        décidé de se distinguer à travers une démarche de certification et d'amélioration constante de son système de
                                        management intégré, permettant d'offrir à ses clients l'assurance d'avoir des services de qualité en étant 
                                        constamment à leur écoute, et en répondant à leur préoccupations, le tout dans des conditions respectueuses 
                                        de la santé des acteurs concernés et de l'environnement.
                                    </strong></em>
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
                                <h2 className="main-heading">NOS ENGAGEMENTS<br /></h2>
                            </div>
                            <ul className="">
                                <li> Respect des exigences opposables.</li>
                                <li> Maintenir le processus d'amelioration continue de notre SMI.</li>
                                <li> Prevenir les prejudices corporels.</li>
                                <li> Assurer la promotion de la protection de l'environnement et de la prévention de la pollution.</li>
                                <li> Impliquer le personnel à toute question relative à la santé et sécurité au travail.</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">NOS OBJECTIFS<br /></h2>
                            </div>
                            <ul className="">
                                <li>Elévation de nos parts de marche et de notre marge commerciale.</li>
                                <li>Surveillance de niveau de conformité à la règlementation et autres exigences.</li>
                                <li>Maîtrise de la fréquence et de la gravité des accidents de travail.</li>
                                <li>Récupération de tous les boitiers GPS à chaque fin de contrat.</li>
                                <li>Recycler le maximum de consommables informatiques découlant de nos activités.</li>
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
                                <h2 className="main-heading">HISTORIQUE<br /></h2>
                            </div>
                            <p className="mb-0">
                                Forte de sa culture en matière de Qualité – Hygiène – Sécurité - Environnement (QHSE), et convaincue des différents
                                avantages qu’offrent les outils de management ISO, i2b a décidé de se lancer dans une démarche QHSE, et a obtenu
                                la triple certification en 2014.
                            </p>
                            <br />
                            <p className="mb-0">
                                Grâce aux multiples efforts et à notre stratégie basée sur les compétences humaines, l’innovation et la fidélisation des
                                clients nous avons maintenu nos certificats au fil des années avons renouvelé les cycles de certification tout en les
                                améliorant. Aujourd’hui i2b est fière d’être certifiée par l’un des leaders mondiaux reconnus pour ses certification
                                « Bureau VERITAS » et ce pour les trois référentiels (ISO 9001 V2015, ISO 14001 V2015 et ISO 45001 V2018).
                            </p>
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

            {/* <section className="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ot-heading mb-0">
                                <img src={`${process.env.PUBLIC_URL}/static/images/img/img-health.jpg`} alt="" /> 
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-center">
                            <div className="ot-heading">
                                <h2 className="main-heading">Santé et securité<br /></h2>
                            </div>
                            <p className="mb-0">
                                La sécurité c'est l'affaire de tous, i2b SPA a rassemblé tous les risques et a fédéré l'ensemble des acteurs au tour d'un objectif commun, celui de travailler dans un milieu sain La santé au travail est un droit fondamental. Tout travailleur a le droit d'évaluer dans un environnement professionnel sain
                            </p>
                        </div>
                    </div>
                    <div className="space-50"></div>
                </div>
            </section> */}

            <Clients />

            <section className="section-consultation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Notre  SAV est à votre disposition 24h/24 et 7/7</h2>
                            <div className="ot-button">
                                <a href="contact" className="octf-btn octf-btn-primary">Nous contacter</a>
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