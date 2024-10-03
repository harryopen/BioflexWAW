import '../css/style.css';

import { Link } from 'react-router-dom';
import about2 from '../assets/about/about2.jpg';
import about4 from '../assets/about/about4.png';
import blog4 from '../assets/blog/blog4.jpg';
import brand4 from '../assets/brand/brand4.png';
import brand5 from '../assets/brand/brand5.png';
import brand6 from '../assets/brand/brand6.png';
import brand7 from '../assets/brand/brand7.png';
import brand8 from '../assets/brand/brand8.png';
import brand9 from '../assets/brand/brand9.png';
import brand10 from '../assets/brand/brand10.png';
import research from '../assets/figure/research.jpg';
import Carousel from '../components/Carousel';

const Research = () => {
  return (
    <>
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{
          backgroundImage: `url(${research}) `,
          backgourndSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Research</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrap-layout5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-box-layout13">
                <h2 className="item-title">
                  Our Best Laboratory
                  <span>Medical Center</span>
                </h2>
                <p>
                  We offer extensive medical services for our patients recommend
                  that you use officia.simply dummy text of theprinting and
                  typesetting industry medical officia.simply dummy text of
                  theprinting and typesetting industry.
                </p>

                <ul className="list-info">
                  <li>Qualified Staff of Doctors</li>

                  <li>Feel like you are at Home Services</li>

                  <li>24x7 Emergency Services</li>

                  <li>Easy and Affordable Billing</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-box-layout14">
                <div className="item-video">
                  <img src={about2} alt="about" />

                  <a
                    className="play-btn popup-youtube"
                    href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                  >
                    <i className="flaticon-play-button"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Area Start Here --> */}

      <section className="bg-light-secondary100">
        <div className="container">
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h2 className="item-title">
                We are here to care
                <span>About Health</span>
              </h2>

              <div className="sub-title">
                Hospital imply dummy text of the printing and type setng
                industry been the industry.
              </div>

              <p>
                We have been supplying our products across pan-India and in over
                25 countries since 2009 & created and cultivated long-term
                relationship with top hospitals & institutions in Indian market,
                Asia, Middle-East & European countries and believe to achieve
                similar confidence and support from you.
              </p>

              <p>
                We are counted among the most reputed manufacturers, exporters
                and suppliers of the industry. In addition, we have also
                implemented automatic and semi-automatic processes in order to
                come up with a superlative assortment of products. Our prime
                focus is to expand the expertise and cater to the clients demand
                on time.
              </p>

              <div className="about-box-layout5">
                <ul className="about-info">
                  <li>Continuous research & development</li>

                  <li>World className manufacturing facilities</li>

                  <li>Team of highly skilled professionals</li>

                  <li>Timely delivery of consignments</li>
                </ul>
              </div>
            </div>

            <div className="about-box-layout12 col-lg-5 col-12">
              <img src={about4} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Area start here */}

      <Carousel />
      {/* Brand Area End Here  */}
    </>
  );
};
export default Research;
