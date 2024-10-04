import quality from '../assets/about/quality-policy.jpg';
function QualityPolicy() {
  return (
    <>
      <section id="2" className="bg-light-secondary100">
        <div className="container">
          <div className="row">
            <div className="about-box-layout11 col-lg-7 col-12">
              <h2 className="item-title">Quality Policy</h2>
              <p>
                We have been supplying our products across pan-India and in over
                25 countries since 2009 & created and cultivated long-term
                relationship with top hospitals & institutions in Indian market,
                Asia, Middle-East & European countries and believe to achieve
                similar confidence and support from you.
              </p>
              <p>
                We are counted among the most reputed manufacturers, exporters
                and suppliers of the industry. In addition, we have also
                implemented automatic and semi-automatic processes in order to
                come up with a superlative assortment of products. Our prime
                focus is to expand the expertise and cater to the clients demand
                on time.
              </p>
              <div className="about-box-layout5">
                <ul className="about-info">
                  <li>Continuous research & development</li>
                  <li>World className manufacturing facilities</li>
                  <li>Team of highly skilled professionals</li>
                  <li>Timely delivery of consignments</li>
                </ul>
              </div>
            </div>
            <div className="about-box-layout12 col-lg-5 col-12">
              <img src={quality} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QualityPolicy;
