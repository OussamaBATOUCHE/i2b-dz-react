import React from 'react'
import { useTranslation } from "react-i18next";

const Secteur = ({title, context, icon, bckgrnd_img_cls}) => {
    const { i18n } = useTranslation();

  return (
    <>
    <div className="col-lg-4 col-md-6 mb-30">
        <div className={`${bckgrnd_img_cls} s2 border-s1 bg text-center`}>
            <div className="icon-main">
                {/* <span className={icon}></span> */}
                <img src={`${process.env.PUBLIC_URL}/static/images/secteurs_icons/${icon}`} alt='GPS-Algerie' />
            </div>
            <div className="content-box">
                <h5><a href="/">{title}</a></h5>
                {/* ul-no-style */}
                <ul className={i18n.dir() === 'rtl' ? 'text-right' : 'text-left'}>
                {context.map(item => (
                            <li key={item}> {item}</li>
                        ))}
                </ul>
            </div>
        </div>
    </div>
    </>
  )}


Secteur.defaultProps = {
    title: 'Secteur N',
    text: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    icon: 'sec1.png',
    bckgrnd_img_cls: ''
}
  

export default Secteur