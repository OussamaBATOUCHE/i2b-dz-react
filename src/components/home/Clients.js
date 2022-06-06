import React from 'react'

const Clients = () => {
  return (
    <>
    <div className="padding-half bg-light-1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="partners">
                        <div className="owl-carousel owl-theme home-client-carousel">
                            <div className="partners-slide">
                                <a href="/" className="client-logo">
                                    <figure className="partners-slide-inner">
                                        <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/sarens.png`} alt="sarens" />
                                    </figure>
                                </a>
                            </div>
                            <div className="partners-slide">
                                <a href="/" className="client-logo">
                                    <figure className="partners-slide-inner">
                                        <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/zoomlion.png`} alt="zoomlion" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Clients