import React from 'react'

const LargeClients = () => {
    let clients_4_logo = ['cnr.png', 'fermann.png', 'hadj_ali.png', 'nord_sud.png' ]
    let clients_3_logo = ['sarens.png', 'satim.png', 'zoomlion.png']
    let all_clogos = [clients_4_logo, clients_3_logo]

  return (
    <>
    <div className="padding-half">
        <div className="container">
            <div className='row'>
                <div className="col-lg-12 text-center">
                    <div className="ot-heading">
                        <h2 className="main-heading">Nos partenaires</h2>              
                    </div>
                </div>
                <div className="space-20"></div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="partners">

                        {all_clogos.map(cslogo => (
                            <div className="row">
                            {cslogo.map(c_logo => (
                                <div className={'col-md-'+(12/cslogo.length)}>
                                    <a href="/" className="client-logo">
                                        <figure className="partners-slide-inner">
                                            <img className="partners-slide-image" src={`${process.env.PUBLIC_URL}/static/images/partners/${c_logo}`} alt="i2b dz" />
                                        </figure>
                                    </a>
                                </div>
                            ))}
                        </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LargeClients
