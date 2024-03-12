import "./product.scss";
import Single from "../../componets/single/Single";
import { singleProduct } from "../../data";

const Product = () => {
  //fetch data and send to Single Component

  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
