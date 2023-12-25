import Single from "../../components/single/Single";
import "./product.scss";

const Product = () => {
  // Fetch data and send it to a single component
  return (
    <div className="product">
      <Single />
    </div>
  );
};

export default Product;
