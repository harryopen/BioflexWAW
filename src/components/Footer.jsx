import '../css/style.css';
import footerlogo from '../assets/footerlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-top-wrap">
          <div className="container">
            <div className="row">
              <div className="single-item col-lg-4 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src={footerlogo}
                        className="img-fluid"
                        alt="footer-logo"
                      />
                    </a>
                  </div>
                  <div className="footer-about">
                    <p>
                      We are the pioneers in various kinds of General surgery
                      including various kinds of drapes.
                    </p>
                  </div>
                  <div className="footer-contact-info">
                    <ul>
                      <li>
                        <i className="fa fa-map-marker"></i>
                        Plot no. 114, Sector-3, HSIIDC,
                        <br />
                        Industrial Estate, Karnal - 132001
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>+08045803576
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>
                        info@surgitechinnovation.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-item col-lg-4 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-header">
                    <h3>Our Products</h3>
                  </div>
                  <div className="footer-departments">
                    <ul>
                      <li>
                        <Link to=""> General Ophthalmic Products</Link>
                      </li>
                      <li>
                        <Link to=""> Eye Care Products</Link>
                      </li>
                      <li>
                        <Link to=""> Disposable Cannula</Link>
                      </li>
                      <li>
                        <Link to=""> Surgical Gowns</Link>
                      </li>
                      <li>
                        <Link to=""> Emergency</Link>
                      </li>
                      <li>
                        <Link to=""> Dressing Pads</Link>
                      </li>
                      <li>
                        <Link to=""> Corneal Products</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="single-item col-lg-4 col-md-6 col-12">
                <div className="footer-box">
                  <div className="footer-header">
                    <h3>Sitemap</h3>
                  </div>
                  <div className="footer-quick-link">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Research">Research</Link>
                      </li>
                      <li>
                        <Link to="/certification">Certifications</Link>
                      </li>
                      <li>
                        <Link to="">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-center-wrap">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-5 col-12">
                <div className="footer-social">
                  <ul>
                    <li>Follow Us:</li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-7 col-12"
                style={{ color: '#eee', textAlign: 'right' }}
              >
                <p>
                  Copyright @ 2024 SurgiTech Innovations. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
