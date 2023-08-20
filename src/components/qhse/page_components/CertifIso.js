import React from 'react'
import { useTranslation } from "react-i18next";

const CertifIso = ({title, context, icon, bckgrnd_img_cls, date}) => {
    const { i18n } = useTranslation();
  return (
    <>
    <div  className="col-lg-3 col-md-6 mb-30">
        <div className={`${bckgrnd_img_cls} s2 border-s1 bg text-center height-350`}>
            <div className="icon-main">
                {/* <span className={icon}></span> */}
                <img src={`${process.env.PUBLIC_URL}/static/images/secteurs_icons/${icon}`} alt='GPS-Algerie' />
                <h3>{date}</h3>
            </div>
            <div className="content-box">
                <h5><a href="/">{title}</a></h5>
                <ul className='ul-no-style text-left' style={i18n.dir() === 'rtl' ? {direction: 'ltr'} : {direction: 'ltr'}}>
                {context.map(item => (
                            <li key={item}> <i className="fa fa-arrow-right"></i> {item}</li>
                        ))}
                </ul>
            </div>
        </div>
    </div>
    </>
  )}


CertifIso.defaultProps = {
    title: 'CertifIso N',
    text: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    icon: 'sec1.png',
    bckgrnd_img_cls: '',
    date: '20XX'
}
  

export default CertifIso