import React from 'react';
import Secteur from './page_components/Secteur';

const NosSecteurs = () => {
    const nb_secteurs = [0, 1, 2];
    const title_secteurs = ['Veille des marchés publics et privés',
                            'Géolocalisation & Gestion de flottes',
                            'Accompagnement des investisseurs']
    const li_items = [
                      ['Business intelligence', "Accès aux appels d'offres", 'Dépôt de soumission', 'Assistance aux entreprise', 'Accès aux archives'],
                      ['Géolocalisation de flotte', 'Suivi des trajets', 'Gestion des parc', 'Gestion des alertes', 'Gestion des interventions'],
                      ['Etude de Marchés', 'Etudes technico-économiques', 'Assistance aux Entreprises', 'Implémentation et Logistiques', 'Moteurs de Recherche juridique']
                     ]
    const sec_icons = ['sec1.png', 'sec2.png', 'sec3.png']
    const sec_bckgrnd = ['icon-box-s2 bg1', 'icon-box-s2 bg2', 'icon-box-s2 bg3']
    return (
        <>            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ot-heading">
                                <span>{'NOS SECTEURS'}</span>
                                <h2 className="main-heading">Nos différents <br />secteurs d'activité </h2>
                                <p>Découvrez comment nos produits innovants répondent aux besoins de divers secteurs d'activité, 
                                    en apportant des solutions adoptées à une multitude d'industies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-30"></div>
                    <div className="row">
                        {nb_secteurs.map(i => (
                            <Secteur title={title_secteurs[i]}  context={li_items[i]} icon={sec_icons[i]} bckgrnd_img_cls={sec_bckgrnd[i]}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NosSecteurs