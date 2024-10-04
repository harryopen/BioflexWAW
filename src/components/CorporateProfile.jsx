import figure from '../assets/figure/figure2.jpg';
const CorporateProfile = () => {
  return (
    <>
      <section
        id="0"
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{ backgroundImage: `url(${figure})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <a href="<?php echo URL?>">Home</a>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CorporateProfile;
