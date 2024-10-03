import '../css/style.css';
import contact from '../assets/figure/contact.jpg';
import Test from '../components/Test';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs-area">
                <h1>Contact Us</h1>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Area Start Here */}
      <section className="contact-wrap-layout" style={{ marginTop: '-450px' }}>
        <div className="container">
          <div className="google-map-area">
            <div
              id="googleMap"
              style={{ width: '100%', height: '496px' }}
            ></div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Leave Us Message</h3>
                <form
                  className="contact-form-box"
                  id="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="First Name *"
                        className="form-control"
                        name="first_name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Last Name *"
                        className="form-control"
                        name="last_name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="E-mail *"
                        className="form-control"
                        name="email"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Phone *"
                        className="form-control"
                        name="phone"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <select className="select2" name="subject" required>
                        <option value="">Select Subject *</option>
                        <option value="1">Product Inquiry</option>
                        <option value="2">General Inquiry</option>
                      </select>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Message*"
                        className="textarea form-control"
                        name="message"
                        rows="7"
                        required
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="col-12 form-group margin-b-none">
                      <button type="submit" className="item-btn">
                        Submit Message
                      </button>
                    </div>
                  </div>
                  <div className="form-response"></div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-box-layout1">
                <h3 className="title title-bar-primary4">Address</h3>
                <div className="contact-info">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>Surgitech
                      Innovations <br /> Plot no. 114, Sector-3, HSIIDC,
                      Industrial Estate, Karnal-132001, Haryana, India
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>info@bioflex.com
                    </li>
                    <li>
                      <i className="fas fa-phone"></i>+918045803576
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Test />
    </>
  );
};

export default ContactUs;
