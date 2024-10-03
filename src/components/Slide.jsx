import '../css/style.css';
import Slider from 'react-slick';
import { useState } from 'react';

import slide1 from '../assets/slider/slide2-1.jpg';
import slide2 from '../assets/slider/slide2-2.jpg';
import slide3 from '../assets/slider/slide2-3.jpg';
const slides = [
  {
    img: slide1,
    label: 'First slide label',
    caption: 'Some representative placeholder content for the first slide.',
  },
  {
    img: slide2,
    label: 'Second slide label',
    caption: 'Some representative placeholder content for the second slide.',
  },
  {
    img: slide3,
    label: 'Third slide label',
    caption: 'Some representative placeholder content for the third slide.',
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <div
                className={`caption ${
                  currentSlide === index ? 'fade-in' : 'fade-out'
                }`}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slide;
