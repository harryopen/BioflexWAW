// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Carousel from 'react-bootstrap/Carousel';
// // import Slider from "react-slick";
// // import blog1 from '../assets/blog/blog1.jpg';
// // import blog2 from '../assets/blog/blog2.jpg';
// // import blog3 from '../assets/blog/blog3.jpg';
// // import blog4 from '../assets/blog/blog4.jpg';
// // import blog5 from '../assets/blog/blog5.jpg';

// const Test = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };
//   const divstyle = {
//     marginTop: '100px',
//     paddingTop: '600px',
//   };

//   return (
//     <>
//       <Carousel>
//         <Carousel.Item>
//           <ComponentCarousel text="blog1" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ComponentCarousel text="blog2" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ComponentCarousel text="blog3" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </>
//   );
// };
// export default Test;

// Accordian for mobile screen size

import { useState } from 'react';

const Test = () => {
  const data = [
    { title: 'Item 1', content: 'content for Item 1' },
    { title: 'Item 2', content: 'content for Item 2' },
    { title: 'Item 3', content: 'content for Item 3' },
  ];
  const [isopen, setOpen] = useState(false);
  const dropdown = () => {
    return !isopen ? setOpen(true) : setOpen(false);
  };
  return (
    <>
      {data.map((item, key) => {
        <h1 className="text-danger" onClick={dropdown}>
          {item.title}
        </h1>;
        {
          isopen && <h5>{item.content}</h5>;
        }
      })}
    </>
  );
};
export default Test;
