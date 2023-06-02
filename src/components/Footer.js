import React from 'react'

const Footer = () => {
    return (
    <>
    <footer id="site-footer" className="site-footer footer-v1">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <p>Suivez nos réseaux sociaux</p>
                        <div className="ft-list-icon">
                                <a className="facebook" href="https://www.facebook.com/i2b.SPA" target={'blank'}><i className="fab fa-facebook-f"></i></a>
                                <a className="linkedin" href="https://www.linkedin.com/company/i2b-spa/" target={'blank'}><i className="fab fa-linkedin-in"></i></a>
                                <a className="youtube" href="https://www.youtube.com/channel/UCVOxHp2xk3mXIiWrzMufxvA/featured" target={'blank'}><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="widget-footer">
                        <p>S'inscrire à nos newsletters</p>
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
                    <p className="copyright-text">Copyright © {new Date().getFullYear()} i2b SPA. Tous les droits sont réservés.</p>
                </div>
            </div>
        </div>
    </footer>
    {/* <!--  #site-footer --> */}
    </>
    )
}

export default Footer