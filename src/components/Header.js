import React from 'react'

function Header() {
  return (
    <div>
        <header id="site-header" className="site-header header-overlay sticky-header header-style-2 header-fullwidth">
            <div className="octf-main-header">
                <div className="octf-area-wrap">
                    <div className="container-fluid octf-mainbar-container">
                        <div className="octf-mainbar">
                            <div className="octf-mainbar-row octf-row">
                                <div className="octf-col logo-col">
                                    <div id="site-logo" className="site-logo">
                                        <a href="/">
                                            <img src={`${process.env.PUBLIC_URL}/static/images/i2bw.png`} alt="i2b" className="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="octf-col menu-col">
                                    <nav id="site-navigation" className="main-navigation">
                                        <ul className="menu nav-style-2">
                                            <li className=" current-menu-item current-menu-ancestor">
                                                <a href="/">Accueil</a>
                                            </li>
                                            <li>
                                                <a href="/">A propos</a>
                                            </li>
                                            <li>
                                                <a href="/">Services</a>
                                            </li>
                                            <li>
                                                <a href="/">QHSE</a>
                                            </li>
                                            <li>
                                                <a href="/">Carrières</a>
                                            </li>
                                            <li><a href="/">News</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="octf-col cta-col text-right">
                                {/* <!--  Call To Action --> */}
                                    <div className="octf-btn-cta hstyle-2">

                                        <div className="octf-header-module">
                                            <div className="toggle_search octf-cta-icons">
                                                <i className="flaticon-search"></i>
                                            </div>
                                            {/* <!--  Form Search on Header --> */}
                                            <div className="h-search-form-field collapse">
                                                <div className="h-search-form-inner">
                                                    <form role="search" method="get" id="hsearch-form" className="search-form">
                                                        <label>
                                                            <span className="screen-reader-text">Search for:</span>
                                                        </label>
                                                        <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                        <button type="submit" className="search-submit"><i className="flaticon-search"></i></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="octf-header-module">
                                            <ul className="social-list">
                                                |
                                        </ul>
                                        </div>


                                        <div className="octf-header-module">
                                            <div className="btn-cta-group btn-cta-header">
                                                <a className="octf-btn octf-btn-third" href="/">Nous contacter</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_mobile">
                <div className="container">
                    <div className="mlogo_wrapper clearfix">
                        <div className="mobile_logo">
                            <a href="/">
                                <img src={`${process.env.PUBLIC_URL}/static/images/i2b-trans.png`} alt="i2bSPA" />
                            </a>
                        </div>
                        <div id="mmenu_toggle">
                            <button></button>
                        </div>
                    </div>
                    <div className="mmenu_wrapper">
                        <div className="mobile_nav collapse">
                            <ul id="menu-main-menu" className="mobile_mainmenu">
                                <li className="menu-item-has-children current-menu-item current-menu-ancestor">
                                    <a href="/">Accueil</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/">Qui sommes-nous?</a>
                                </li>
                                <li className="menu-item-has-children"><a href="/">Services</a>
                                    <ul className="sub-menu">
                                        <li><a href="https://www.algeriatenders.com/">Algeria Tenders</a></li>
                                        <li><a href="https://www.geoflotte.com/">Geoflotte</a></li>
                                        <li><a href="https://www.algeriainvest.com/">Algeria Inverst</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/">QHSE</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/">Carrières</a>
                                </li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header