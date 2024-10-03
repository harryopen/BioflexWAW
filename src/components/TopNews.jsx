import blog1 from '../assets/blog/blog1.jpg';
const TopNews = () => {
  return (
    <>
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
            The future of medical technology is poised to transform healthcare
            with advancements that promise more personalized, efficient, and
            effective treatments. Here are some key trends and innovations
            shaping the future.
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
    </>
  );
};
export default TopNews;
