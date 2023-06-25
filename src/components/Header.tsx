import React from 'react'
// import {useNavigate} from 'react-router-dom';
// import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { LANGUAGES } from "../constants/index"
import { useTranslation } from "react-i18next";


function Header() {

    const { i18n, t } = useTranslation();
    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
    <>
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
                                            <li className='menu-item-has-children current-menu-item current-menu-ancestor'>
                                                <HashLink to="/#top" reloadDocument>{t("Header.accueil")}</HashLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <HashLink to="/#quisommenous" smooth={true} reloadDocument>{t("Header.qui-somme-nous")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/#nosvaleurs" smooth={true} reloadDocument>{t("Header.nos-valeurs")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/#notrevision" smooth={true} reloadDocument>{t("Header.notre-vision")}</HashLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='menu-item-has-children'>
                                                <HashLink to="/services#top" reloadDocument>{t("Header.services")}</HashLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <HashLink to="/services#servicesat" smooth={true} reloadDocument>Algeria Tenders</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/services#servicesgeo" smooth={true} reloadDocument={true}>Geoflotte</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/services#servicesai" smooth={true} reloadDocument>Algeria Invest</HashLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='menu-item-has-children'>
                                                <HashLink to="/qhse#top" reloadDocument>{t("Header.qhse")}</HashLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <HashLink to="/qhse#qhseintro" smooth={true} reloadDocument>{t("Header.introduction")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/qhse#qhseengagobjctf" smooth={true} reloadDocument>{t("Header.nos-engagements")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/qhse#qhseengagobjctf" smooth={true} reloadDocument>{t("Header.nos-objectifs")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/qhse#qhsehistorique" smooth={true} reloadDocument={true}>{t("Header.hostorique")}</HashLink>
                                                    </li>
                                                    <li>
                                                        <HashLink to="/qhse#qhsecertifications" smooth={true} reloadDocument>{t("Header.certifications")}</HashLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <HashLink to="/carrieres#top" reloadDocument>{t("Header.talens")}</HashLink>
                                            </li>
                                            <li>
                                                <HashLink to="/contact#top" reloadDocument>{t("Header.contact")}</HashLink>
                                            </li>
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
                                            
                                        </ul>
                                    </div>
                                    
                                    <select className='lang' defaultValue={i18n.language} onChange={onChangeLang}>
                                        {LANGUAGES.map(({ code, label }) => (
                                        <option key={code} value={code}>
                                            {label}
                                        </option>
                                        ))}
                                    </select>

                                    {/* <div className="octf-header-module">
                                        <div className="ft-list-icon ">
                                            <a className="globe" href="/" >
                                                <i className="flaticon-world-globe"></i>
                                            </a>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
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
                            <li>
                                <a href="/services">Services</a>
                            </li>
                            <li>
                                <a href="/qhse">QHSE</a>
                            </li>
                            <li>
                                <a href="/carriere">Carrières</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header