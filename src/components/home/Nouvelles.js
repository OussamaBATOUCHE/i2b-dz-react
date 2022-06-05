import React from 'react'

const Nouvelles = () => {
  return (
    <>
    <section className="news-v5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="ot-heading mb-0">
                        <span>{"// news et nouveautés"}</span>
                        <h2 className="main-heading">Lisez nos dernières nouvelles</h2>
                    </div>
                </div>
                <div className="col-md-6 text-right sm-text-left sm-mt-30 align-self-end">
                    <div className="ot-button">
                        <a href="blog.html" className="octf-btn octf-btn-primary">Toutes les nouvelles</a>
                    </div>
                    <div className="space-10"></div>
                </div>
            </div>
            <div className="space-40"></div>
            <div className="post-grid pgrid">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="post-box blog-item">
                            <div className="post-inner">
                                <div className="entry-media">
                                    <div className="post-cat">
                                        <span className="posted-in">
                                            <a href="/" rel="category tag">Secteur : Géolocalisation</a>

                                        </span>
                                    </div>
                                    <a href="/"><img src={`${process.env.PUBLIC_URL}static/images/news_mob_geo.jpg`} alt=""/></a>
                                </div>
                                <div className="inner-post">
                                    <div className="entry-header">
                                        <div className="entry-meta">
                                            <span className="posted-on"><a href="/">18 avril 2022</a></span>
                                            <span className="comment-num">_ <a href="/">3 Comments</a></span>
                                        </div>

                                        <h3 className="entry-title"><a href="/">Lancement de l’application Mobile Geoflotte sur Play Store</a></h3>
                                    </div>

                                    <div className="btn-readmore">
                                        <a href="/"><i className="flaticon-right-arrow-1"></i>LIRE LA SUITE</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="post-box blog-item">
                            <div className="post-inner">
                                <div className="entry-media">
                                    <div className="post-cat">
                                        <span className="posted-in">
                                            <a href="/" rel="category tag">Secteur : Géolocalisation</a>

                                        </span>
                                    </div>
                                    <a href="/">
                                        <img src={`${process.env.PUBLIC_URL}static/images/Vol_voitures_Geo.jpg`} alt="" />
                                    </a>
                                </div>
                                <div className="inner-post">
                                    <div className="entry-header">
                                        <div className="entry-meta">
                                            <span className="posted-on"><a href="/">17 avril 2022</a></span>
                                            <span className="comment-num">_ <a href="/">0 Comments</a></span>
                                        </div>

                                        <h3 className="entry-title"><a href="/">Retrouvez vos véhicules volés grâce à la solution GEOFLOTTE</a></h3>
                                    </div>

                                    <div className="btn-readmore">
                                        <a href="/"><i className="flaticon-right-arrow-1"></i>LIRE LA SUITE</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <article className="post-box blog-item">
                            <div className="post-inner">
                                <div className="entry-media">
                                    <div className="post-cat"><span className="posted-in"><a href="/" rel="category tag">Secteur : Algeria INVEST</a></span></div>
                                    <a href="/">
                                        <img src={`${process.env.PUBLIC_URL}static/images/News_AI.jpg`} alt="" />
                                    </a>
                                </div>
                                <div className="inner-post">
                                    <div className="entry-header">
                                        <div className="entry-meta">
                                            <span className="posted-on"><a href="/">16 avril 2022</a></span>
                                                                             <span className="comment-num">_ <a href="/">3 Comments</a></span>
                                        </div>

                                        <h3 className="entry-title"><a href="/">L'accélérateur Algeria Venture représente les startups algériennes</a></h3>
                                    </div>

                                    <div className="btn-readmore">
                                        <a href="/"><i className="flaticon-right-arrow-1"></i>LIRE LA SUITE</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Nouvelles