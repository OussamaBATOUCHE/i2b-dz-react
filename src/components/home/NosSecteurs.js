import React from 'react';
import Secteur from './page_components/Secteur';
import { useTranslation } from "react-i18next";
import { NB_SECTEURS, SEC_ICONS, SEC_BCKGRND } from "../../constants"

const NosSecteurs = () => {
    const { t } = useTranslation();
    const TITLE_SECTEURS = t("home.NosSecteurs.TITLE_SECTEURS");
    const LI_ITEMS = t("home.NosSecteurs.LI_ITEMS");
    return (
        <>            
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="ot-heading">
                                <span>{t("home.NosSecteurs.nos-secteurs")}</span>
                                <h2 className="main-heading">{t("home.NosSecteurs.diff-secteurs-activite")}</h2>
                                <p> {t("home.NosSecteurs.text")} </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-30"></div>
                    <div className="row">
                        {NB_SECTEURS.map(i => (
                            <Secteur key={i} 
                            title={TITLE_SECTEURS[i]}  
                            context={LI_ITEMS[i]} 
                            icon={SEC_ICONS[i]} 
                            bckgrnd_img_cls={SEC_BCKGRND[i]}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NosSecteurs