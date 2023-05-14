import React from 'react'

const Secteur = ({title, context, icon, bckgrnd_img_cls}) => {
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
                <ul className='ul-no-style text-left'>
                {context.map(item => (
                            <li>{item}</li>
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
}
  

export default Secteur