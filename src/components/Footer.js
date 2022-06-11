import React from 'react'

const Footer = () => {
    return (
    <>
    <footer id="site-footer" className="site-footer footer-v1">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <h5 className="text-white">Prestations de service</h5>
                        <ul className="list-items">
                            <li className="list-item"><a href="/">Plateforme des marchés publics</a></li>
                            <li className="list-item"><a href="/">Solution de géolocalisation</a></li>
                            <li className="list-item"><a href="/">Plateforme de l'investissement</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <h5 className="text-white">Apprendre</h5>
                        <ul className="list-items">
                            <li className="list-item"><a href="/">Rejoignez nous</a></li>
                            <li className="list-item"><a href="/">Mentions légales</a></li>
                            <li className="list-item"><a href="/">Conditions d'utilisation</a></li>

                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <h5 className="text-white">Compagnie</h5>
                        <ul className="list-items">
                            <li className="list-item"><a href="/">À propos de la société</a></li>
                            <li className="list-item"><a href="/">Certifications et QHSE</a></li>
                            <li className="list-item"><a href="/">Contactez nous</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <h5 className="text-white">S'abonner</h5>
                        <p>Restez à jour ... Suivez notre newsletter</p>
                        <form action="newsletter.php" id="mc4wp-form-1" className="mc4wp-form" method="post">
                            <div className="mc4wp-form-fields">
                                <div className="subscribe-inner-form">
                                    <input type="email" name="email" placeholder="Votre e-mail" required="" />
                                    <button type="submit" className="subscribe-btn-icon"><i className="flaticon-telegram"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="ft-list-icon">
                    <a className="twitter" href="twitter.com"><i className="fab fa-twitter"></i></a>
                    <a className="facebook" href="https://www.facebook.com/i2b.SPA"><i className="fab fa-facebook-f"></i></a>
                    <a className="linkedin" href="https://www.linkedin.com/company/i2b-spa/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="youtube" href="https://www.youtube.com/channel/UCVOxHp2xk3mXIiWrzMufxvA/featured"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="row mt-35">
                <div className="col-md-4 mb-4 mb-md-0">
                    <img src={`${process.env.PUBLIC_URL}/static/images/i2bw.png`} alt="i2bspa" className="lazyloaded" data-ll-status="loaded" style={{width: '20%'}} />
                </div>
                
                <div className="col-md-8 text-left text-md-right align-self-center">
                    <p className="copyright-text">Copyright © 2022 i2b SPA. Tous les droits sont réservés.</p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--  #site-footer --> */}
    </>
    )
}

export default Footer