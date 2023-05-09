import React from 'react';
import Secteur from './page_components/Secteur';

const NosSecteurs = () => {
    const nb_secteurs = [0, 1, 2];
    const title_secteurs = ['Veille des marchés publics et privés',
                            'Géolocalisation & Gestion de flottes',
                            'Accompagnement des investisseurs']
    const li_items = [
                      ['Markets & finance', 'Business advice', 'Assistance for foreign companies', 'Operational assistance'],
                      ['BTPH & Chantiers', 'Santé & Pharmaceutique', 'Location de véhicules', 'Transport public'],
                      ["Appels d'offres, adjudications et ventes aux enchères", 'Cycle de vie du marché', 'Moteur de recherche performant']
                     ]
    return (
        <>            
            <section>
                <div className="container">
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
                            <Secteur title={title_secteurs[i]}  context={li_items[i]}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NosSecteurs