import React, { useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import Axios from 'axios';
import * as EmailValidator from 'node-email-validation';

const Footer = () => {
    const { t } = useTranslation();
    
    const refEmail = useRef(null);

    const refAlert = useRef(null);
    const [alrtmsg, setAlrtmsg] = useState('');

    const [email, setEmail] = useState('');

    const submitNewsletter = ()=>{
        // const theres = EmailValidator.is_email_valid(email);
        if(email === '' | EmailValidator.is_email_valid(email)===false){
            addAlert(t("Footer.form-alert.missing-fields"), 'alert-warning');
        }else{
            const data = {newsletterEmail: email};
            // const host = 'http://localhost:3001/api/insertnewsletter';
            const host = 'https://i2b-dz.com/api/insertnewsletter';

            Axios.post(host, data).then((response)=>{
                if(response.data === true){
                    console.log('ALL IS GOOD');

                    resetInputs();
                    resetVars();
                    addAlert(t("Footer.form-alert.success"), 'alert-success');
                }else{
                    console.log('We have problems !!!')
                    addAlert(t("Footer.form-alert.error"), 'alert-danger');
                }
            });
        }
        
    };

    const removeAlert = () => {
        refAlert.current.classList.remove('show-alert', 'alert-danger','alert-success', 'alert-warning');
    }

    const addAlert = (text, theclass) => {
        refAlert.current.classList.remove('alert-danger','alert-success', 'alert-warning');
        refAlert.current.classList.add(theclass, 'show-alert');
        setAlrtmsg(text)
    }

    const resetInputs = () => {
        refEmail.current.value = ''
    };
    const resetVars = () => {
        setEmail('');
    }

    return (
    <>
    <footer id="site-footer" className="site-footer footer-v1">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <p>{t("Footer.reseaux-sociaux")}</p>
                        <div className="ft-list-icon">
                                <a className="facebook" href="https://www.facebook.com/i2b.SPA" target={'blank'}><i className="fab fa-facebook-f"></i></a>
                                <a className="linkedin" href="https://www.linkedin.com/company/i2b-spa/" target={'blank'}><i className="fab fa-linkedin-in"></i></a>
                                <a className="youtube" href="https://www.youtube.com/channel/UCVOxHp2xk3mXIiWrzMufxvA/featured" target={'blank'}><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        {/* Alerts */}
                        <div ref={refAlert} className="alert alert-dismissible fade" role="alert">
                            <strong>{alrtmsg}</strong>
                            <button type="button" className="close" onClick={removeAlert}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <p>{t("Footer.inscrire-newsletter")}</p>
                        <div id="mc4wp-form-1" className="mc4wp-form" >
                            <div className="mc4wp-form-fields">
                                <div className="subscribe-inner-form">
                                    <input ref={refEmail} type="email" name="email" placeholder={t("Footer.placeholder")} required onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}/>
                                    <button className="subscribe-btn-icon" onClick={submitNewsletter}><i className="flaticon-telegram"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                
                <div className="col-md-4 mb-4 mb-md-0">
                    <img src={`${process.env.PUBLIC_URL}/static/images/iso-fr.png`} 
                         alt="i2bspa" 
                         className="lazyloaded" 
                         data-ll-status="loaded" 
                         style={{width: '55%', marginRight: '4px'}} />
                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bw.png`} 
                         alt="i2bspa" 
                         className="lazyloaded" 
                         data-ll-status="loaded" 
                         style={{width: '29%'}} />         
                </div>
                
                <div className="col-md-8 text-left text-md-right align-self-center">
                    <p className="copyright-text">Copyright © {new Date().getFullYear()} i2b SPA. {t("Footer.droits-reserves")}</p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--  #site-footer --> */}
    </>
    )
}

export default Footer