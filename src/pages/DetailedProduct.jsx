import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/style.css';
import TextEditorReplace from '../components/TextEditorReplace';
import RelatedProducts from '../components/RelatedProducts';
const DetailedProduct = () => {
  const { productId, catId } = useParams();
  const [data, setData] = useState([]);
  const [mainImage, setMainImage] = useState('');
  useEffect(() => {
    fetch(
      `http://localhost/bioflex/backend/API/DetailedProduct.php?Productid=${productId}`,
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('The error is due to', error));
  }, [productId]);
  // lets check catId is return by API or not

  // function to handle summernote text editor data
  // const TextEditorReplace = (text) => {
  //   if (!text) return ''; // Return empty string if text is undefined or null
  //   return text
  //     .replace(/&lt;/g, '<')
  //     .replace(/&gt;/g, '>')
  //     .replace(/&quot;/g, '"')
  //     .replace(/&amp;rsquo;/g, "'")
  //     .replace(/&amp;nbsp;/g, ' ')
  //     .replace(/&amp;/g, '&');
  // };

  return (
    <>
      {/*Breadcrums */}
      {data.map((item, key) => {
        const imageArray = item.product_image
          ? item.product_image.split(',')
          : [];

        return (
          <>
            <section
              className="inner-page-banner bg-common"
              style={{ marginTop: '20px', paddingBottom: '0px' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumbs-area">
                      <h1>{item.product_name}</h1>

                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>

                        <li>
                          <Link to={`/category/${catId}`}>
                            Back to the category
                          </Link>
                        </li>

                        <li>{item.product_name}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="single-product-wrap bg-light-primary100"
              style={{ paddingTop: '40px' }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12 margin-b-30r">
                    <div className="single-product-box">
                      <div className="row">
                        <div className="col-xl-5 col-12">
                          <div className="single-product-gallery">
                            <div className="tab-content">
                              <div
                                role="tabpanel"
                                className="tab-pane fade active show"
                                id="fitness-related1"
                              >
                                <img
                                  alt="single"
                                  src={`http://localhost/bioflex/images/products/${
                                    mainImage ? mainImage : imageArray[0]
                                  }`}
                                  className="img-responsive"
                                />
                              </div>
                            </div>
                            <ul className="nav nav-tabs">
                              <li className="nav-item">
                                <img
                                  alt="fitness-related1"
                                  src={`http://localhost/bioflex/images/products/${imageArray[0]}`}
                                  className="img-responsive"
                                  onClick={() => {
                                    setMainImage(imageArray[0]);
                                  }}
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  alt="fitness-related2"
                                  src={`http://localhost/bioflex/images/products/${imageArray[1]}`}
                                  className="img-responsive"
                                  onClick={() => {
                                    setMainImage(imageArray[1]);
                                  }}
                                />
                              </li>
                              <li className="nav-item">
                                <img
                                  alt="fitness-related3"
                                  src={`http://localhost/bioflex/images/products/${imageArray[2]}`}
                                  className="img-responsive"
                                  onClick={() => {
                                    setMainImage(imageArray[2]);
                                  }}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-7 col-12">
                          <div className="single-product-info">
                            <h2 className="item-title">{item.product_name}</h2>
                            <p style={{ lineHeight: '28px' }}>
                              {/* {TextEditorReplace(
                                data.product_short_description,
                              )} */}
                              <TextEditorReplace
                                text={item.product_short_description}
                              />
                              <strong> {item.product_name} </strong>like
                              <strong>
                                {' '}
                                Eye shield, absorbent sticks, Ophthalmic
                                instruments
                              </strong>
                              . The offered products are manufactured with the
                              aid of highly advanced techniques using superior
                              quality basic materials.
                            </p>
                            <div className="cart-action-area">
                              <form id="cart-quantity">
                                <ul className="cart-quantity">
                                  <li>
                                    <a href="#" className="item-btn">
                                      More Details
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      className="item-btn"
                                      style={{ background: '#F00' }}
                                    >
                                      Send Inquiry
                                    </a>
                                  </li>
                                </ul>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="single-product-tab">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <ul className="nav nav-tabs">
                            <li className="nav-item">
                              <a
                                href="#description"
                                data-toggle="tab"
                                aria-expanded="false"
                                className="active"
                              >
                                Description
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#review"
                                data-toggle="tab"
                                aria-expanded="false"
                              >
                                Key Features
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane fade active show"
                              id="description"
                            >
                              <p>
                                Yorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nam fringilla augue nec est
                                tristique auctor. Donec non est at libero
                                vulputate rutrum. Morbi justo gravida semper.
                              </p>
                              <ul className="list-content">
                                <li>Seat Height – Floor to Seat: 24”</li>
                                <li>Frame Material: Wood</li>
                                <li>Seat Material: Wood</li>
                                <li>Adjustable Height: No</li>
                                <li>Overall: 24” H x 17” W x 14” D</li>
                              </ul>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane fade"
                              id="review"
                            >
                              <p>
                                Porem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat
                                volutpat. Ut wisi enim ad minim veniam, quis
                                nostrud exerci tation ullamcorper suscipit
                                lobortis nisl ut aliquip ex ea commodo
                                consequat. Lorem ipsum dolor sit adipiscing elit
                                ut laoreet dolore magna aliquam.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <RelatedProducts props={catId} />
          </>
        );
      })}
    </>
  );
};
export default DetailedProduct;
