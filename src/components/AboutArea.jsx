import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import about3 from '../assets/about/about3.png';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
function AboutArea() {
  return (
    <>
      <section className="about-wrap-layout2">
        <div className="container">
          <div className="row">
            <div className="about-box-layout6 col-lg-6">
              <h2 className="item-title">
                Welcome To
                <span>Bioflex</span>.<br /> Surgitech Innovations
              </h2>
              <div className="sub-title">
                Surgitech Innovations was established in 2007 with a mission to
                improve the healthcare industry with our quality &amp;
                innovative products.
              </div>

              <p>
                Surgitech Innovation is growing with a mission to become first
                preference of General Surgery and Opthalmology society across
                the globe with advance quality, updated innovtaions and team of
                professionals at out state of art facilitites. Over the past 3
                years, we have established ourselves among the prominent
                manufacturers, exporters and suppliers of the industry.{' '}
              </p>

              <div className="call-to-action-btn">
                <a href="#" className="item-btn">
                  READ MORE <i className="fa fa-chevron-right"></i>
                </a>
              </div>
            </div>

            <div className="about-box-layout7 col-lg-6">
              <div className="item-video">
                <img src={about3} alt="about" />

                <a
                  className="play-btn popup-youtube"
                  href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                >
                  <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutArea;
