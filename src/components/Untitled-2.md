  <header id="header_2">
      <div class="header-top-bar top-bar-border-bottom bg-light-primary100 d-none d-md-block">
          <div class="container">
              <div class="row">
                  <div class="col-lg-3 col-md-3 logo-area-layout2">
                   <Link to="/" className="temp-logo">
                <img src={logo} alt="logo" />
              </Link>
                  </div>
                  <div class="col-lg-9 col-md-9 col-12 header-contact-layout2">
                      <ul>

                          <li>
                              <div class="media">
                                  <i class="fas fa-phone"></i>
                                  <div class="media-body space-sm">
                                      <div class="title">Call Us</div>
                                      <div class="info">+91 8045803576</div>
                                  </div>
                              </div>
                          </li>
                          <li>

                              <div class="header-social-layout1">

                                  <a href="#">
                                      <i class="fab fa-facebook-f"></i>
                                  </a>

                                  <a href="#">
                                      <i class="fab fa-twitter"></i>
                                  </a>

                                  <a href="#">
                                      <i class="fab fa-linkedin-in"></i>
                                  </a>

                                  <a href="#">
                                      <i class="fab fa-pinterest"></i>
                                  </a>


                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div class="header-menu-area header-menu-layout2">
          <div class="container">
              <div class="row no-gutters d-flex align-items-center">
                  <div class="col-md-11 possition-static">
                      <div class="template-main-menu">
                          <nav id="dropdown">
                              <ul>
                                  <li>
                      <Link to="/">Home</Link>
                    </li>
                                  <li>
                                      <a href="#">Our Products</a>
                                      <ul className="dropdown-menu-col-1"
                        style={{ width: '600px' }}">
                                          <li>
                                              <div class="row" style="padding:17px 25px">

                                                  <div class="col-6">
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

                                                  <div class="col-6">
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
                                      <a href="<?php echo URL ?>content/certifications">Our Certifications</a><Link to="/OurCertification">Our Certifications</Link>
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
                                  <!-- <li>
                                            <a href="gallery.html">Gallery</a>
                                        </li>-->
                                  <li><Link to="/LatestNews">Latest News</Link>
                                  </li>
                                  <li>
                                      <Link to="/contact">Contact Us</Link><a href="<?php echo URL ?>content/contact-us">Contact Us</a>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <div class="col-md-1">
                      <div class="header-action-items-layout2">
                          <ul>
                              <li class="d-none d-xl-block">
                                  <form id="top-search-form" class="header-search-dark">
                                      <input type="text" class="search-input" placeholder="Search...." required>
                                      <button class="search-button">
                                          <i class="flaticon-search"></i>
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
