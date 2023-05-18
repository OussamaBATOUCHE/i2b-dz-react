import React from 'react'

const Clients = () => {
    let clients_logo = ['cnr.png', 'fermann.png', 'hadj_ali.png', 'nord_sud.png', 'sarens.png', 'satim.png', 'zoomlion.png']
  return (
    <>
    <div className="padding-half bg-light-1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="partners">
                        <div className="owl-carousel owl-theme home-client-carousel">

                            {clients_logo.map(c_logo => (
                                <div className="partners-slide">
                                    <a href="/" className="client-logo">
                                        <figure className="partners-slide-inner">
                                            <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/${c_logo}`} alt="i2b dz" />
                                        </figure>
                                    </a>
                                </div>
                            ))}

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