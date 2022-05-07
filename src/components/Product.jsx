import { useDispatch } from "react-redux";
import { buyItem, getTotal } from "../redux/features/cart/cartSlice";
import Data from "../dataProperties.json";

function Product(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const buyNowHandler = () => {
    dispatch(buyItem(product));
    dispatch(getTotal());
  };
  return (
    <section className="product">
      <div className="product-name">{product.name}</div>
      <img src={product.imageURL} alt={`picture of ${product.name}`} />
      <p className="product-description">{product.description}</p>
      <div className="price-buy">
        <span>
          {Data.MRP}
          {product.price}
        </span>
        <button className="buy-btn" onClick={buyNowHandler}>
          {Data.BuyNow}
        </button>
      </div>
    </section>
  );
}

export default Product;
