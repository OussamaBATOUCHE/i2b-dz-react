import React from 'react'
import ExpertCard from './page_components/ExpertCard'
// import { experts1, experts2 } from '../../constants'
import { useTranslation } from "react-i18next";

const Experts = () => {
    const { t } = useTranslation();
    let experts1 = t("home.Experts.experts1")
    let experts2 = t("home.Experts.experts2")
  return (
    <>
    <section className="team-v5">
        <div className="container">

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <span>{t("home.Experts.notre-equipe")}</span>
                        <h2 className="main-heading">Leadership Team</h2>
                    </div>
                    <div className="space-5"></div>
                    <div className="space-20"></div>
                </div>
            </div>

            <div className="row ">
                {experts1.map(expert => (
                    <ExpertCard key={expert.name} name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path} text={expert.text}/>
                ))}
            </div>

            <div className="row ">
                {experts2.map(expert => (
                    <ExpertCard key={expert.name} name={expert.name} surname={expert.surname} position={expert.position} photo_path={expert.photo_path} text={expert.text}/>
                ))}
            </div>

                {/* <div className="owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                        <div className="owl-stage"> */}
                            
                        {/* </div>
                    </div>
                </div> */}
        </div>
    </section>

    </>
  )
}

export default Experts