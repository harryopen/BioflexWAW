import '../css/style.css';
import figure9 from '../assets/figure/figure9.jpg';
function Banner() {
  return (
    <div>
        <section className="features-wrap-layout1">
<div className="features-box-layout1 d-lg-flex flex-lg-row-reverse">

    <div className="item-inner-wrapper" style={{ background: '#f9f9f9' }}>

        <div className="item-content d-flex align-items-center">

            <div className="container">

                <div className="row justify-content-end">

                    <div className="col-lg-6 col-sm-12 col-12">

                        <div className="item-content-inner inner-title-dark">

                            <h3 className="item-title">Our Advanced Healthcare Products have marked our presence in national and international regions </h3>

                            <p>Our cutting-edge healthcare products have made a significant impact across national and international markets, reflecting our commitment to excellence. We

                                possess a well integrated infrastructural facility that enables us to fulfill varied  needs. We have set up a sturdy R&D facility which is backed by a diligent team of research analysts. They conduct thorough market research and analysis in order to come up with latest products. Our manufacturing unit is well equipped with latest technology machinery and equipment. </p>

                            <div className="call-to-action-btn">

                                <a href="#" className="item-btn">READ MORE <i className="fas fa-chevron-right"></i></a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

    <div className="item-inner-wrapper">

        <img src={figure9} className="img-responsive" alt="figure"/>

    </div>

</div>

</section>
    </div>
  )
}

export default Banner;
