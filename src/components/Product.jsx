import { data } from '../assets/constants/data.js';
const { img } = data;
console.log(img);
function Product() {
  return (
    <div className="container mt-5">
      <div className="card" style={{ width: '18rem' }}>
        {data.map((item, key) => {
          <div>{item.heading}</div>;
        })}
        <div className="card-body">
          <h5 className="card-title">Card Title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
