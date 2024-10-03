import Latestnews from '../assets/about/latest-news.jpg';
import blog1 from '../assets/blog/blog1.jpg';
import blog2 from '../assets/blog/blog2.jpg';
import blog3 from '../assets/blog/blog3.jpg';
import blog10 from '../assets/blog/blog10.jpg';
import blog5 from '../assets/blog/blog5.jpg';
import blog6 from '../assets/blog/blog6.jpg';
import blog11 from '../assets/blog/blog11.jpg';
import blog12 from '../assets/blog/blog12.jpg';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <>
      <div id="wrapper" className="wrapper" />

      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{ backgroundImage: `url(${Latestnews})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Latest News</h1>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>News</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
    <!-- Inne Page Banner Area End Here --> */}

      {/* <!-- Blog Grid Area Start Here --> */}

      <section className="blog-wrap-layout2 bg-light-primary100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-12">
              <div className="row">
                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog1} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        22
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog2} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        21
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog3} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        20
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog10} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        20
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog11} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        20
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-item col-md-6 col-sm-12 col-12">
                  <div className="blog-box-layout4">
                    <div className="item-img">
                      <a href="single-news.html">
                        <img src={blog12} className="img-fluid" alt="blog" />
                      </a>

                      <div className="post-date">
                        20
                        <span>June</span>
                      </div>
                    </div>

                    <div className="item-content">
                      <h3 className="item-title">
                        <a href="single-news.html">
                          The Future of Medical Technology: Innovations
                        </a>
                      </h3>

                      <p>
                        The future of medical technology is poised to transform
                        healthcare with advancements that promise more
                        personalized, efficient, and effective treatments. Here
                        are some key trends and innovations shaping the future.
                      </p>

                      <div className="post-actions-wrapper">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="flaticon-people"></i>by
                              <span>admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i className="flaticon-interface"></i>15
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="pagination-layout1 margin-t-20">
                <li>
                  <a href="#">Previous</a>
                </li>

                <li className="active">
                  <a href="#">1</a>
                </li>

                <li>
                  <a href="#">2</a>
                </li>

                <li>
                  <a href="#">3</a>
                </li>

                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
            <div className="sidebar-widget-area sidebar-break-md col-xl-3 col-lg-4 col-12">
              <div className="widget widget-search">
                <h3 className="section-title title-bar-primary">
                  Search Keywords
                </h3>
                <div className="input-group stylish-input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here . . ."
                  />
                  <span className="input-group-addon">
                    <button type="submit">
                      <span
                        className="flaticon-search"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </span>
                </div>
              </div>
              <div className="widget widget-categories">
                <h3 className="section-title title-bar-primary">Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      Eye Care
                      <span>15</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Disposable Cannula
                      <span>10</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Surgical Gowns
                      <span>14</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Dressing Pads
                      <span>13</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Corneal Products
                      <span>19</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="widget widget-recent">
                <h3 className="section-title title-bar-primary">
                  Related Posts
                </h3>
                <div className="media">
                  <a href="#">
                    <img src={blog6} alt="news" className="img-fluid" />
                  </a>

                  <div className="media-body space-sm">
                    <div className="post-date">June 27, 2024</div>

                    <h4 className="post-title">
                      <a href="#">
                        Achieving Better Health with best products.
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="media">
                  <a href="#">
                    <img src={blog5} alt="news" className="img-fluid" />
                  </a>

                  <div className="media-body space-sm">
                    <div className="post-date">June 27, 2024</div>

                    <h4 className="post-title">
                      <a href="#">
                        Achieving Better Health with best products.
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="widget widget-tag">
                <h3 className="section-title title-bar-primary">Tags</h3>

                <ul>
                  <li>
                    <a href="#">Dental</a>
                  </li>

                  <li>
                    <a href="#">Eye Care</a>
                  </li>

                  <li>
                    <a href="#">Labrotary</a>
                  </li>

                  <li>
                    <a href="#">Care</a>
                  </li>

                  <li>
                    <a href="#">Health</a>
                  </li>

                  <li>
                    <a href="#">Modern Clinic</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LatestNews;
