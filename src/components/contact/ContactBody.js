import React from 'react'

function ContactBody() {
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
                                <h2>Contact</h2>
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
                                    <span>Détails du contact</span>
                                    <h2 className="main-heading">Nous-Contacter</h2>
                                </div>
                                <div className="space-5"></div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-world-globe"></i>                    
                                    <div className="info-text">
                                        <h6>Sites</h6>
                                        <p> <strong>Alger :</strong> 6, rue Ahmed Chérifi, Kouba, Alger</p>
                                        <p> <strong>Oran :</strong> Cité point du jour lot n°57, Oran</p> 
                                    </div>
                                </div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-envelope"></i>
                                    <div className="info-text">
                                        <h6>Email</h6>
                                        <p>contact@i2b-dz.com</p>
                                    </div>
                                </div>
                                <div className="contact-info box-style1">
                                    <i className="flaticon-phone-1"></i>
                                    <div className="info-text">
                                        <h6>Téléphones</h6>
                                        <p> <strong>Alger :</strong>+213 (0) 23 78 63 47</p>
                                        <p> <strong>Oran  :</strong>+213 (0) 782 48 56 92</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="contact.php" method="post" className="wpcf7">
                                <div className="main-form">
                                    <h2>Prêt à commencer?</h2>
                                    <p className="font14">Votre adresse email ne sera pas publiée. Les champs obligatoire sont indiqués par *</p>
                                    <p>
                                        <input type="text" name="name" value="" size="70" className="" aria-required="true" aria-invalid="false" placeholder="Nom *" required />
                                    </p>
                                    <p>
                                        <input type="email" name="email" value="" size="40" className="" aria-required="true" aria-invalid="false" placeholder="Email *" required />
                                    </p>
                                    <p>
                                        <input type="text" name="entreprise" value="" size="70" className="" aria-required="true" aria-invalid="false" placeholder="Entreprise"  />
                                    </p>
                                    <p>
                                        <input type="text" name="sujet" value="" size="70" className="" aria-required="true" aria-invalid="false" placeholder="Sujet *" required />
                                    </p>
                                    <p>
                                        <textarea name="message" cols="40" rows="10" className="" aria-invalid="false" placeholder="Message..." required></textarea>
                                    </p>
                                    <p><button type="submit" className="octf-btn octf-btn-light">Envoyer le message</button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Maps */}
            <div className="no-padding">
                <div className="row">
                    <div className="col align-self-center text-center">
                        <h2 className="main-heading">Bureaux d'Alger</h2>
                    </div>
                    <div className="col align-self-center text-center">
                    <h2 className="main-heading">Bureaux d'Oran</h2>
                    </div>
                </div>
                <div className="map row">
                    <div className="col">
                        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3197.4942874545445!2d3.085458!3d36.734705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecd4af1884c3f841!2si2b%20S.P.A!5e0!3m2!1sfr!2sdz!4v1664475238556!5m2!1sfr!2sdz" height="500" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col">
                        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6479.574474570514!2d-0.600004!3d35.706853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9374c3cab4ef70e!2si2b%20oran!5e0!3m2!1sfr!2sdz!4v1664474793917!5m2!1sfr!2sdz" height="500" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
            
            
        </div>
    </>
  )
}

export default ContactBody