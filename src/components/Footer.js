import Logo from './images/tzort-logo-white.png'
import './css/Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 footer_separator pe-lg-5">
                            <div className="footer_logo">
                                <img src={Logo} className="img-fluid" alt="Footer Logo" />
                                    <p className="para text-white mt-5">TZORT is in the business of sharing happiness. There is nothing
                                        like
                                        enjoying a full-service
                                        resort with your family, friends, or business associates. Just as Airbnb does with
                                        individual rooms and
                                        homes, we share our owners’ resorts. The best resorts in the country are now available for
                                        all to enjoy.
                                        Travel resort style with TZORT!</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 footer_separator px-lg-5 mt-lg-0 mt-5">
                            <div className="footer_anchor_list">
                                <div className="main_heading">
                                    <h3 className="text-white pb-4">Menu</h3>
                                </div>
                                <ul>
                                    <li><NavLink to="/home">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/blogs">Blog</NavLink></li>
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                    <li><NavLink to="/terms-and-conditions">Terms & Conditions</NavLink></li>
                                    <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 footer_separator ps-lg-5 mt-lg-0 mt-5">
                            <div className="footer_anchor_list footer_anchor_list_info">
                                <div className="main_heading">
                                    <h3 className="text-white pb-4">Contact</h3>
                                </div>
                                <ul>
                                    <li><a href=""><i className="fas fa-map-marker-alt"></i>201 W. Big Beaver Road Suite
                                        500 Troy, MI
                                        48084</a></li>
                                    <li><a href="mailto:support@tzort.com"><i className="far fa-envelope"></i>Support@Tzort.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social_icons my-4">
                                <ul>
                                    <li><a href="https://www.facebook.com/people/TZort/100071396814777/"><i
                                        className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/Tzort3"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/tzort-travel-resort-style-44863022a/"><i
                                        className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCCIegdjz_56ajNX2wyI3fPg"><i
                                        className="fab fa-youtube"></i></a></li>
                                    <li><a href="https://www.instagram.com/travelwithtzort/"><i
                                        className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.pinterest.com/tzorttravel/"><i className="fab fa-pinterest"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="copyright_text text-center">
                                    <p className="para text-white mt-3">Copyright © 2023 <a className="text-white"
                                        href="/home">TZORT.com</a>. All Rights Reserved.</p>
                                    <p className="para text-white my-3">This site is protected by reCAPTCHA and the Google <a
                                        href="https://policies.google.com/privacy" className="text-white">Privacy Policy</a> and
                                        <a href="https://policies.google.com/terms" className="text-white">Terms of Service</a>
                                        apply.
                                    </p>
                                    <p className="para text-white mb-3"><a href="https://bluesoftwebsites.com/"
                                        className="text-white">Web Design By BlueSoft</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;
