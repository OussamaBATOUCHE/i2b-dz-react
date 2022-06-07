import React from 'react'

const FirstSection = () => {
  return (
    <>
        <section className="top-v5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 align-self-center">
                        <div className="top-left-v5">
                            <div className="ot-heading">
                                <span>Innovation, Performance et Fiabilité</span>
                                <h2 className="main-heading">Intégrateur de Solutions Informatiques & Télécommunications</h2>
                            </div>
                            <div className="ot-button">
                                <a href="/" className="octf-btn octf-btn-primary">Nous Découvrir</a>
                            </div>
                            {/* <div className="video-popup style-3">
                            <div className="btn-inner">
                            <a className="btn-play" href="{% static 'videos/vitrinei2b.mp4'%}"><i className="flaticon-play"></i>
                            <span className="circle-1"></span>
                            <span className="circle-2"></span>
                            </a>
                            </div>
                            <span>vidéo vitrine</span>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="top-right-v5">
                            <img src={`${process.env.PUBLIC_URL}/static/images/img/image-banner-home5.png`} alt='bkg-img' style={{mixBlendMode: 'screen'}} />
                            <video className="vid-in-laptop" src={`${process.env.PUBLIC_URL}/static/videos/vitrinei2b.mp4`} autoPlay={true} muted loop controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FirstSection