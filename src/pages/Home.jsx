import AboutArea from '../components/AboutArea';
import Action from '../components/Action';
import Api from '../components/Api';
import Banner from '../components/Banner';
import Product from '../components/Product';
import Progress from '../components/Progress';
import Slide from '../components/Slide';
import OurFeatured from '../components/OurFeatured';
import BrandCarousel from '../components/BrandCarousel';
import '../css/style.css';
import Test from '../components/Test';
import DepartmentalArea from '../components/DepartmentalArea';

const Home = () => {
  return (
    <>
      <Slide />
      <Action />
      <AboutArea />
      <Progress />
      <Banner />
      <OurFeatured />
      <BrandCarousel />
      {/* <Product /> */}
      {/* <Api /> */}
    </>
  );
};

export default Home;
