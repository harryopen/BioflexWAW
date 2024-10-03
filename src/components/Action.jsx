function Action() {
  return (
    <section className="call-to-action-wrap-layout3 position-relative zindex-5 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="call-to-action-box-layout3">
              <div className="single-item">
                <a href="#" aria-label="Our Location">
                  <i className="fa fa-map-marker"></i> Our Location
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="call-to-action-box-layout3">
              <div className="single-item">
                <a href="#" style={{ background: '#15c515', color: '#fff' }}>
                  <i className="fa fa-book"></i> Product Catalogue
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="call-to-action-box-layout3">
              <div className="single-item">
                <a href="appointment.html" aria-label="Request a Call Back">
                  <i className="fa fa-calendar"></i> Request a Call Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Action;
