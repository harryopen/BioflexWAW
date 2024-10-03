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
const BrandCarousel = () => {
  return (
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
  );
};
export default BrandCarousel;
