import React, { useState, useRef } from 'react'
import { useTranslation } from "react-i18next";
import Axios from 'axios';
import * as EmailValidator from 'node-email-validation';


function ContactBody() {
    const { t, i18n } = useTranslation();

    const refName = useRef(null);
    const refEmail = useRef(null);
    const refCompany = useRef(null);
    const refSubject = useRef(null);
    const refMessage = useRef(null);

    const refAlert = useRef(null);
    const [alrtmsg, setAlrtmsg] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitContact = ()=>{
        if(email === '' || subject === '' || message === '' || EmailValidator.is_email_valid(email)===false){
            addAlert(t("contact.ContactBody.form-alert.missing-fields"), 'alert-warning');
        }else{
            const data = {  contactName: name, 
                contactEmail: email,
                contactCompany: company,
                contactSubject: subject,
                contactMessage: message};
            const host = 'http://localhost:3001/api/insert';
            const host2 = 'https://i2b-dz.com/api/insert';

            Axios.post(host2, data).then((response)=>{
                if(response.data === true){
                    console.log('ALL IS GOOD');

                    resetInputs();
                    resetVars();
                    addAlert(t("contact.ContactBody.form-alert.success"), 'alert-success');
                }else{
                    console.log('We have problems !!!')
                    addAlert(t("contact.ContactBody.form-alert.error"), 'alert-danger');
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
        refName.current.value = ''
        refEmail.current.value = ''
        refCompany.current.value = ''
        refSubject.current.value = ''
        refMessage.current.value = ''
    };
    const resetVars = () => {
        setName('');
        setEmail('');
        setCompany('');
        setSubject('');
        setMessage('');
    }

  return (
    <>
       <div id="content" className="site-content">
        
            <section className="top-v5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
                            {/* style={{width:524, height:577}}  */}
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/img-contact.jpg`} alt="i2b-dz" />
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="home2-top-right">
                                <h2>{t("contact.ContactBody.contact")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-left">
                                <div className="ot-heading">
                                    <span>{t("contact.ContactBody.details-contact")}</span>
                                    <h2 className="main-heading">{t("contact.ContactBody.nous-contacter")}</h2>
                                </div>
                                <div className="space-5"></div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-world-globe"></i>                    
                                    <div className="info-text">
                                        <h6>{t("contact.ContactBody.sites")}</h6>
                                        <p> <strong>{t("contact.ContactBody.alger")} :</strong> {t("contact.ContactBody.address-alger")}</p>
                                        <p> <strong>Oran :</strong> {t("contact.ContactBody.address-oran")}</p> 
                                    </div>
                                </div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-envelope"></i>
                                    <div className="info-text">
                                        <h6>{t("contact.ContactBody.email")}</h6>
                                        <p>contact@i2b-dz.com</p>
                                    </div>
                                </div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-phone-1"></i>
                                    <div className="info-text">
                                        <h6>{t("contact.ContactBody.telephones")}</h6>
                                        <p> 
                                            <strong>{t("contact.ContactBody.alger")} :</strong> 
                                            <span style={i18n.dir() === 'rtl' ? {direction: 'ltr'} : {direction: 'ltr'}}>+213 (0) 23 78 63 74</span>
                                        </p>
                                        <p>
                                            <strong>{t("contact.ContactBody.oran")}  :</strong> 
                                            <span>+213 (0) 41 82 72 26</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-info box-style1">
                                    <i className="fas fa-fax"></i> 
                                    <div className="info-text">
                                        <h6>{t("contact.ContactBody.fax")}</h6>
                                        <p> 
                                            <strong>{t("contact.ContactBody.alger")} :</strong>
                                            <span>+213 (0) 23 78 63 39</span>
                                        </p>
                                        <p> 
                                            <strong>{t("contact.ContactBody.oran")}  :</strong> 
                                            <span>+213 (0) 41 82 72 25</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div ref={refAlert} className="alert alert-dismissible fade" role="alert">
                                <strong>{alrtmsg}</strong>
                                <button type="button" className="close" onClick={removeAlert}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="wpcf7">
                                <div className="main-form">
                                    <h2>{t("contact.ContactBody.pret-a-commencer")}</h2>
                                    <p className="font14">{t("contact.ContactBody.form-text")}</p>
                                    <p>
                                        <input  type="text" ref={refName}
                                        name="name" defaultValue="" size="70" className="" aria-required="true" aria-invalid="false" placeholder={t("contact.ContactBody.form-nom")} 
                                        required 
                                        onChange={(e)=>{
                                            setName(e.target.value)
                                        }}/>
                                    </p>
                                    <p>
                                        <input type="email" ref={refEmail}
                                        name="email" defaultValue="" size="40" className="" aria-required="true" aria-invalid="false" placeholder={t("contact.ContactBody.form-email")} 
                                        required 
                                        onChange={(e)=>{
                                            setEmail(e.target.value)
                                        }}/>
                                    </p>
                                    <p>
                                        <input type="text" ref={refCompany}
                                        name="company" defaultValue="" size="70" className="" aria-required="true" aria-invalid="false" placeholder={t("contact.ContactBody.form-entreprise")}  
                                        required
                                        onChange={(e)=>{
                                            setCompany(e.target.value)
                                        }}/>
                                    </p>
                                    <p>
                                        <input type="text" ref={refSubject}
                                        name="subject" defaultValue="" size="70" className="" aria-required="true" aria-invalid="false" placeholder={t("contact.ContactBody.form-sujet")} 
                                        required 
                                        onChange={(e)=>{
                                            setSubject(e.target.value)
                                        }}/>
                                    </p>
                                    <p>
                                        <textarea name="message" ref={refMessage} cols="40" rows="10" className="" aria-invalid="false" placeholder={t("contact.ContactBody.form-message")} 
                                        required
                                        onChange={(e)=>{
                                            setMessage(e.target.value)
                                        }}></textarea>
                                    </p>
                                    <p>
                                        <button className="octf-btn octf-btn-light" onClick={submitContact}>{t("contact.ContactBody.form-button")}</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maps */}
            <div className="no-padding">
                <div className="row">
                    <div className="col align-self-center text-center">
                        <h2 className="main-heading">{t("contact.ContactBody.bureaux-alger")}</h2>
                    </div>
                    <div className="col align-self-center text-center">
                    <h2 className="main-heading">{t("contact.ContactBody.bureaux-oran")}</h2>
                    </div>
                </div>
                <div className="map row">
                    <div className="col">
                        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3197.4942874545445!2d3.085458!3d36.734705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecd4af1884c3f841!2si2b%20S.P.A!5e0!3m2!1sfr!2sdz!4v1664475238556!5m2!1sfr!2sdz" height="500" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className="col">
                        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6479.574474570514!2d-0.600004!3d35.706853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9374c3cab4ef70e!2si2b%20oran!5e0!3m2!1sfr!2sdz!4v1664474793917!5m2!1sfr!2sdz" height="500" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default ContactBody