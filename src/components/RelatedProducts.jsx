import { useEffect } from 'react';
import '../css/style.css'; // Adjust the path as necessary
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
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
const RelatedProducts = ({ props }) => {
  console.log('The value sent by props is ', props); // lets debug the code

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost/bioflex/backend/API/api2.php?catid=${props}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('The error is ', error));
  }, [props]);
  console.log('The data sent by API is ', data);
  return (
    <section className="team-wrap-layout1 bg-light-secondary100">
      <div className="container">
        <div className="section-heading heading-dark text-left heading-layout1">
          <h2>Related Products</h2>
        </div>
        <Slider {...settings} style={{ maxWidth: '90%', margin: '0 auto ' }}>
          {data.length > 1
            ? data.map((item) => {
                const Image = item.product_image
                  ? item.product_image.split(',')
                  : [];
                const firstImage = Image[0] ? Image[0].trim() : null;

                return (
                  <>
                    <div className="p-3 ">
                      <div className="team-box-layout4">
                        <div className="item-img">
                          <img
                            src={`http://localhost/bioflex/images/products/${firstImage}`}
                            alt="Team1"
                            className="img-fluid"
                          />
                          <ul className="item-icon">
                            <li>
                              <a href="single-doctor.html">
                                <Link
                                  to={`/category/${item.product_category}/${item.product_id}`}
                                  className="item-btn"
                                >
                                  Details
                                </Link>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="item-content">
                          <h4 className="item-title">
                            <a href="single-doctor.html">{item.product_name}</a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            : null}
        </Slider>
        <br />
        <div className="call-to-action-btn" align="center">
          <a href="#" className="item-btn">
            View All Products <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
