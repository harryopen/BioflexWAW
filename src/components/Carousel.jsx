import '../css/style.css';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';

import brand4 from '../assets/brand/brand4.png';
import brand5 from '../assets/brand/brand5.png';
import brand6 from '../assets/brand/brand6.png';
import brand7 from '../assets/brand/brand7.png';
import brand8 from '../assets/brand/brand8.png';
import brand9 from '../assets/brand/brand9.png';


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024, // Medium devices (e.g., tablets)
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768, // Small devices (e.g., mobile)
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480, // Extra small devices (e.g., phones)
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
};

    return (
        <div className="container my-5" id="c1">

            <Slider {...settings} className="p-3"  >
                {[brand4, brand5, brand6, brand7, brand8, brand9].map((brand, index) => (
                    <div key={index} className="slide d-flex justify-content-center align-items-center">
                        <div className="image-wrapper">
                            <img src={brand} alt={`Brand ${index + 4}`} className="img-fluid" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
