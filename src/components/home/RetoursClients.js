import React from 'react'

const RetoursClients = () => {
  return (
    <>
    <section className="clients-v5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <span className="text-primary-light">{"// Nos retours clients"}</span>
                        <h2 className="main-heading text-white">Ils nous ont fait confiance</h2>
                    </div>
                    <div className="space-35"></div>
                </div>
                <div className="col-lg-12">
                    <div className="ot-testimonials testimonials-style-2">
                        <div className="owl-carousel owl-theme testimonial-inner ot-testimonials-slider">
                            <div className="testi-item">
                                <div className="layer1"></div>
                                <div className="layer2">
                                    <div className="t-head flex-middle">
                                        <img src={`${process.env.PUBLIC_URL}/static/images/companieslogo/topnet.png`} alt="Emilia Clarke" className="lazyloaded" data-ll-status="loaded" />
                                        <div className="tinfo">
                                            <h6>TopNet,</h6>
                                            <span>Directeur commercial </span>
                                        </div>
                                    </div>
                                    <div className="ttext">
                                        "Une relation d'affaires qui dure depuis une dizaine d'années, très satisfait de la qualité de service et d'un service client à l'écoute.
                                        Ce sont des éclaireurs, pleines de ressources, à même de donner de la visibilité à leurs clients.
                                        Bonne continuation”"
                                    </div>
                                </div>
                            </div>

                            <div className="testi-item">
                                <div className="layer1"></div>
                                <div className="layer2">
                                    <div className="t-head flex-middle">
                                        <img src="https://via.placeholder.com/90x90.png" alt="Emilia Clarke" className="lazyloaded" data-ll-status="loaded" />
                                        <div className="tinfo">
                                            <h6>SoftTech,</h6>
                                            <span>Manager of Company</span>
                                        </div>
                                    </div>
                                    <div className="ttext">
                                        "Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!."
                                    </div>
                                </div>
                            </div>

                                    <div className="testi-item">
                                <div className="layer1"></div>
                                <div className="layer2">
                                    <div className="t-head flex-middle">
                                        <img src={`${process.env.PUBLIC_URL}/static/images/companieslogo/ambassadedespagne.jpg`} alt="Emilia Clarke" className="lazyloaded" data-ll-status="loaded" />
                                        <div className="tinfo">
                                            <h6>Ambassade d'Espagne,</h6>
                                            <span>Oficina Economica y Commercial </span>
                                        </div>
                                    </div>
                                    <div className="ttext">
                                        “Nous sommes utilisateurs du site ALGERIATENDERS depuis plusieurs années et nous trouvons que c'est un excellent outil
                                        de travail qui nous aide à avoir connaissance de tout ce qui est appels d'offres pour les différents secteurs, et ainsi
                                        pouvoir en informer les opérateurs espagnols. <br />
                                        Nous tenons à signaler l'écoute, l'assistance et la réactivité dont nous bénéficions.”
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    </>
  )
}

export default RetoursClients