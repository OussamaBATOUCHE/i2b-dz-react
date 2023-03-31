import React from 'react';
import Secteur from './page_components/Secteur';

const NosSecteurs = () => {
    const nb_secteurs = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <section className="service-v5">
                <div className="container">
                    <div className="row mt--70 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box s1 v5 bg-s1">
                                <a href={"https://www.algeriatenders.com/accueil"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <img className='at' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-at-color.png`} alt="algerie tenders" />
                                </div>
                            </div>
                            <div className='products-box border-sa'>
                                La plateforme des marchés publics en Algérie.
                                Consultez toutes les annonces des marchés publics.
                                Saisissez et développez toutes les opportunités de croissance en Algérie.
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
                                Solution de géolocalisation et de gestion de flotte de tous types de véhicules,
                                d'engins et d'équipements mobiles en temps réel, qui permet aux entreprises de suivre, de maîtriser,
                                de gérer et de sécuriser leur flotte.
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="serv-box s1 v5 bg-s3">
                                <a href={"https://algeriainvest.com/"} className="overlay" target={'blank'}>-</a>
                                <div className="content-box">
                                    <img className='ai' src={`${process.env.PUBLIC_URL}/static/images/i2bproducts/logo-ai-color.png`} alt="algeria invest" />
                                </div>
                            </div>
                            <div className='products-box border-s1'>
                                Première plateforme pour l'investissement en Algérie qui regroupe
                                des opportunités d'affaires Nationales et Internationales et assure aux investisseurs un accompagnement adapté
                                dans des domaines d'activités variés.
                            </div>
                        </div>
                    </div>
                    <div className="space-110"></div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ot-heading">
                                <span>{'NOS SECTEURS'}</span>
                                <h2 className="main-heading">Nos différents <br />secteurs d'activité </h2>
                            </div>
                        </div>
                    </div>
                    <div className="space-30"></div>
                    <div className="row">
                        {nb_secteurs.map(i => (
                            <Secteur title={'Secteur '.concat(i)} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NosSecteurs