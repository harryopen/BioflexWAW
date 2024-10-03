import '../css/style.css';
import banner from '../assets/figure/certifications.jpg';
import certificate from '../assets/gallery/certificate.jpg';
const OurCertification = () => {
  return (
    <>
      {/* <!-- scrollUp Start Here --> */}

      <a href="#wrapper" data-type="section-switch" className="scrollUp">
        <i className="fas fa-angle-double-up"></i>
      </a>

      {/* <!-- scrollUp End Here --> */}

      <div id="wrapper" className="wrapper" />
      {/* <!-- Inne Page Banner Area Start Here --> */}

      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Our Certifications</h1>

                <ul>
                  <li>
                    <a href="<?php echo URL?>">Home</a>
                  </li>

                  <li>Certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Inne Page Banner Area End Here --> */}

      {/* <!-- Gallery Area Start Here --> */}

      <section className="gallery-wrap-layout1 bg-light-accent100">
        <div className="container">
          <div className="isotope-wrap">
            <div className="text-center">
              <div className="isotope-classNamees-tab isotop-btn">
                <a href="#" className="current nav-item" data-filter="*">
                  All
                </a>

                <a href="#" className="nav-item" data-filter=".dental">
                  Ophthalmic Products
                </a>

                <a href="#" className="nav-item" data-filter=".eye">
                  Eye Care
                </a>

                <a href="#" className="nav-item" data-filter=".cardiology">
                  Dressing Pads
                </a>

                <a href="#" className="nav-item" data-filter=".orthopaedics">
                  Corneal Products
                </a>
              </div>
            </div>

            <div className="row featuredContainer zoom-gallery">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 dental cardiology">
                <div className="gallery-box-layout1">
                  <img src={certificate} alt="" className="img-fluid" />

                  <div className="item-icon">
                    <a
                      href={certificate}
                      className="popup-zoom"
                      data-fancybox-group="gallery"
                      title=""
                    >
                      <i className="flaticon-search"></i>
                    </a>
                  </div>

                  <div className="item-content">
                    <h3 className="item-title">Certificate of Compliance</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Gallery Area End Here --> */}
    </>
  );
};
export default OurCertification;
