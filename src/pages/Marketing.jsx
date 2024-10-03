import '../css/style.css';
import marketing from '../assets/figure/marketing.jpg';
import domestic from '../assets/about/domestic.jpg';
import international from '../assets/about/international.jpg';
import Slider from 'react-slick';
import teamImage1 from '../assets/brand/brand6.png';
import teamImage2 from '../assets/brand/brand7.png';
import teamImage3 from '../assets/brand/brand8.png';
import teamImage4 from '../assets/brand/brand9.png';
var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const data = [
  { img: teamImage1, name: 'Eye care' },
  { img: teamImage2, name: 'gloves' },
  { img: teamImage3, name: 'marker' },
  { img: teamImage4, name: 'wire' },
];
const Marketing = () => {
  return (
    <>
      <div id="wrapper" className="wrapper" />
      <section
        className="inner-page-banner bg-common inner-page-top-margin "
        style={{ backgroundImage: `url(${marketing})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Marketing</h1>

                <ul>
                  <li>
                    <a href="<?php echo URL?>">Home</a>
                  </li>

                  <li>Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Inne Page Banner Area End Here -->

    <!-- About Area Start Here --> */}

      <section className="about-wrap-layout2" id="domestic">
        <div className="container">
          <div className="row">
            <div className="about-box-layout12 col-lg-5 col-12">
              <img src={domestic} alt="" className="img-fluid" />
            </div>

            <div className="about-box-layout11 col-lg-7 col-12">
              <h2 className="item-title">
                Domestic <span>Marketing</span>
              </h2>

              <div className="sub-title">
                Hospital imply dummy text of the printing and type setng
                industry been the industry.
              </div>

              <p>
                Mtandard dummy texr since when an unknown printer took a
                galley.MediPoint Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, At accusam aliquyam.'s standard dummy texr
                since when an unknown printer took a galley consetetur. Moimply
                dummy text of the printing and type settingaindustry. Lorem
                Ipsum has been the industry’s standard dummy text ever since
                thelong established fact thaaret
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-wrap-layout2" id="international">
        <div className="container">
          <div className="row">
            <div className="about-box-layout12 col-lg-5 col-12">
              <img src={international} alt="" className="img-fluid" />
            </div>
            <div className="about-box-layout11 col-lg-7 col-12">
              <h2 className="item-title">
                International
                <span>Marketing</span>
              </h2>

              {/* <!--<div className="sub-title">Hospital imply dummy text of the printing and type setng industry been the industry.</div>--> */}

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

              <div className="about-box-layout5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Area End Here --> */}

      {/* <!-- Brand Area Start Here --> */}

      <section
        className="brand-wrap-layout2"
        style={{ maxWidth: '90%', margin: '0 auto ' }}
      >
        <Slider {...settings}>
          {data.map((item, key) => {
            return (
              <>
                <div className="p-0">
                  <div className="container">
                    <div className="brand-box-layout3">
                      <img src={item.img} alt="brand" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
};
export default Marketing;
