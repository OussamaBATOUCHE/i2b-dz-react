import React from 'react'

const Secteur = ({title, text, icon}) => {
  return (
    <>
    <div className="col-lg-4 col-md-6 mb-30">
        <div className="icon-box-s2 s2 border-s1 bg bg1 text-center">
            <div className="icon-main"><span className={icon}></span></div>
            <div className="content-box">
                <h5><a href="/">{title}</a></h5>
                <p>
                   {text}                            
                </p>
            </div>
        </div>
    </div>
    </>
  )}


Secteur.defaultProps = {
    title: 'Secteur N',
    text: 'lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    icon: 'flaticon-code',
}
  

export default Secteur