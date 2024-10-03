import { Link, useParams } from 'react-router-dom';
import department3 from '../assets/department/department3.jpg';

import { useEffect, useState } from 'react';
import TextEditorReplace from '../components/TextEditorReplace';

const CategoryProducts = () => {
  const { catId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost/bioflex/backend/API/api2.php?catid=${catId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [catId]);

  console.log('The data sent by ', data);
  console.log('category Name is ', catId); // For debugging

  return (
    <>
      {/* Banner start from here */}
      <section
        className="inner-page-banner bg-common inner-page-top-margin"
        style={{ backgroundColor: '#d2e8f2', padding: '60px' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>General Ophthalmic Products</h1>
              <div className="breadcrumbs-area">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Ophthalmic Products</a>
                  </li>
                  <li>Disposable Surgical Instruments</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="about-box-layout13">
                <p>
                  Our comprehensive range of General Ophthalmic Products is used
                  for diagnosis of corneal epithelium of eyes, to assess eye
                  pressure by examining cornea, to check tear discharge rate of
                  individuals eyes and for trouble free fitting of hard contact
                  lens. These are also used to safeguard eyes after surgical
                  procedure. Medical grade dye, pharmaceutical grade transparent
                  polypropylene, PVA sponge, filter paper and cellulose fiber
                  have been used to develop these ophthalmic items. The
                  utilization of these medical products eliminates the necessity
                  of anesthesia during eye check up process. Disposable quality,
                  biodegradable nature, utilization of lint free sponge or
                  fabric, good absorption capacity and versatile quality are
                  some key attributes of these General Ophthalmic Products.
                </p>
                <ul className="list-info">
                  <li>
                    The offered ophthalmic items are made of pharmaceutical
                    grade PVA sponge, dye, translucent PP, and cellulose fiber.
                  </li>
                  <li>
                    Some of these medical products are of disposable quality.
                  </li>
                  <li>Easy to use.</li>
                  <li>Cost-effective.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-box-layout14">
                <div className="item-video">
                  <img
                    src={department3}
                    style={{ maxWidth: '80%' }}
                    alt="test"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner ends here */}

      {/* Products listed here */}
      <section className="departments-wrap-layout1 bg-light-accent100">
        <div className="container menu-list-wrapper">
          <h2 style={{ paddingBottom: '15px' }}>
            List of General Ophthalmic Products
          </h2>
          <div className="row menu-list">
            {data.map((item, key) => {
              const imageArray = item.product_image
                ? item.product_image.split(',')
                : [];
              const firstImage = imageArray[0] ? imageArray[0].trim() : null;

              return (
                <>
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 col-12 menu-item "
                    key={item.product_id}
                  >
                    <div className="departments-box-layout1">
                      <div className="item-img">
                        <img
                          src={`http://localhost/bioflex/images/products/${firstImage}`}
                          alt="image"
                          className="img-fluid"
                        />
                        <div className="item-btn-wrap">
                          <Link
                            to={`/category/${catId}/${item.product_id}`}
                            className="item-btn"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                      <div
                        className="item-content"
                        style={{ minHeight: '200px' }}
                      >
                        <h4 className="item-title">
                          <Link to="/category/:catId/:productId">
                            {item.product_name}
                          </Link>
                        </h4>
                        <ul className="department-info">
                          <p style={{ textAlign: 'left' }}>
                            <TextEditorReplace
                              text={item.product_short_description}
                            />
                          </p>
                          <li>
                            <span>Delivery Time: </span>7-8 days
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      {/* <h1>You are at Category ID: {catId}</h1> */}
    </>
  );
};

export default CategoryProducts;
