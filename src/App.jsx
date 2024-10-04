import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Marketing from './pages/Marketing';
import OurCertification from './pages/OurCertification';
import Footer from './components/Footer';
import LatestNews from './pages/LatestNews';
import ContactUs from './pages/ContactUs';
import Carousel from './components/Carousel';
import CategoryProducts from './pages/CategoryProducts';
import DetailedProduct from './pages/DetailedProduct';
import ScrollUpButton from './components/ScrollUpButton';
import Corporate from './pages/Corporate';

function App() {
  return (
    <>
      <ScrollUpButton />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/OurCertification" element={<OurCertification />} />
          <Route path="/LatestNews" element={<LatestNews />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Testing" element={<Carousel />} />

          <Route path="/category/:catId" element={<CategoryProducts />}></Route>
          <Route
            path="/category/:catId/:productId"
            element={<DetailedProduct />}
          ></Route>

          {/* <Route path="/corporate" element={<Corporate />} /> */}
          <Route path="/:componentId" element={<Corporate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
