import '../css/style.css';
function Progress() {
  return (
    <div>
      <section className="progress-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="progress-box-layout1 col-md-4">
              <div className="inner-item">
                <div className="item-icon">
                  <i className="flaticon-bionic-contact-lens"></i>
                </div>

                <div className="item-content">
                  <div className="counting-text counter" data-num="100">
                    100 +
                  </div>

                  <p>Products</p>
                </div>
              </div>
            </div>

            <div className="progress-box-layout1 col-md-4">
              <div className="inner-item">
                <div className="item-icon">
                  <i className="flaticon-brain"></i>
                </div>

                <div className="item-content">
                  <div className="counting-text counter" data-num="15">
                    15
                  </div>

                  <p>Years of Experience</p>
                </div>
              </div>
            </div>

            <div className="progress-box-layout1 col-md-4">
              <div className="inner-item">
                <div className="item-icon">
                  <i className="flaticon-people"></i>
                </div>

                <div className="item-content">
                  <div className="counting-text counter" data-num="350">
                    350
                  </div>

                  <p>Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Progress;
