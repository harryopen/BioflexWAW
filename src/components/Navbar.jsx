import '../css/style.css';

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const corporate = [
    { title: 'Corporate Profile', link: '/content/about-us' },
    { title: 'Chairman Desk', link: '/content/about-us#chairman' },
    { title: 'Quality Policy', link: '/content/about-us#quality_policy' },
    { title: 'Mission & Vision', link: '/content/about-us#mission' },
    { title: 'History', link: '/content/about-us#history' },
  ];

  // lets create api for all category
  const [data, setData] = useState([]);
  const [hamburger, setHamburger] = useState(false);
  const [isopen, setIsopen] = useState(false);
  useEffect(() => {
    fetch('http://localhost/bioflex/backend/API/Allproduct.php')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('error due to ', error));
  }, []);

  const MobileView = () => {
    !hamburger ? setHamburger(true) : setHamburger(false);
  };

  const NestedList = () => {
    !isopen ? setIsopen(true) : setIsopen(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-lg-none">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={MobileView}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {hamburger ? (
          <div className="main">
            <ul className={`nav-list ${hamburger ? 'active' : ''}`}>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link">Our Products</span>
                <ul className="dropdown-menu">
                  {data.map((product, index) => (
                    <li key={index}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${product.pcategory_id}`}
                      >
                        {product.pcategory_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Research">
                  Research
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Marketing">
                  Marketing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/OurCertification">
                  Our Certifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LatestNews">
                  Corporate
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/LatestNews">
                  Latest News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </nav>

      <header id="header_2">
        <div className=" header-top-bar top-bar-border-bottom bg-light-primary100 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 logo-area-layout2">
                <Link to="/" className="temp-logo">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="col-lg-9 col-md-9 col-12 header-contact-layout2">
                <ul>
                  <li>
                    <div className="media">
                      <i className="fa fa-phone"></i>
                      <div className="media-body space-sm">
                        <div className="title">Call Us</div>
                        <div className="info">+91 8045803576</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="header-social-layout1">
                      <a href="#">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu-area header-menu-layout2 d-none d-lg-block">
          <div className="container">
            <div className="row no-gutters d-flex align-items-center ">
              <div className="col-md-11 position-static">
                <div className="template-main-menu">
                  <nav id="dropdown">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <a href="#">Our Products</a>
                        <ul
                          className="dropdown-menu-col-1"
                          style={{ width: '600px' }}
                        >
                          <li>
                            <div
                              className="row"
                              style={{ padding: '17px 25px' }}
                            >
                              <div className="col-6">
                                <ul>
                                  {data
                                    .slice(0, Math.ceil(data.length / 2))
                                    .map((product, index) => (
                                      <li key={index}>
                                        <Link
                                          to={`/category/${product.pcategory_id}`}
                                        >
                                          {product.pcategory_name}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul>
                                  {data
                                    .slice(Math.ceil(data.length / 2))
                                    .map((product, index) => (
                                      <li key={index}>
                                        <Link
                                          to={`/category/${product.pcategory_id}`}
                                        >
                                          {product.pcategory_name}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/Research">Research</Link>
                      </li>
                      <li>
                        <Link to="/Marketing">Marketing</Link>
                      </li>
                      <li>
                        <Link to="/OurCertification">Our Certifications</Link>
                      </li>
                      <li>
                        <Link to="/Corporate">Corporate</Link>
                        <ul className="dropdown-menu-col-1">
                          {corporate.map((item, index) => (
                            <li key={index}>
                              <a href={item.link}>{item.title}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link to="/LatestNews">Latest News</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-md-1">
                <div className="header-action-items-layout2">
                  <ul>
                    <li className="d-none d-xl-block">
                      <form id="top-search-form" className="header-search-dark">
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Search...."
                          required
                        />
                        <button className="search-button">
                          <i className="flaticon-search"></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
