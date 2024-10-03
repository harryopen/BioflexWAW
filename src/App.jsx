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

          {/* <Route path="/women" element={<ShopCategory  banner={women_banner}category="women"/>}/>
           <Route path="/kids" element={<ShopCategory  banner={kids_banner}category="kids"/>}/>
           <Route path="/Research" element={<Research/>}/>
           <Route path="/Marketing" element={<Marketing/>}/>
           <Route path ="/Latest-News" element ={<LatestNews/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
