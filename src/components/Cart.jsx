import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  cartToggle,
  reduceQuantity,
  increaseQuantity,
  getTotal,
} from "../redux/features/cart/cartSlice";
function Cart() {
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems]);
  const cartCloseHandler = () => {
    dispatch(cartToggle());
  };
  const reduceQtyHandler = (cartItem) => {
    dispatch(reduceQuantity(cartItem));
  };
  const increaseQtyHandler = (cartItem) => {
    dispatch(increaseQuantity(cartItem));
  };
  return (
    <article className="cart">
      <div className="cart-title">
        <p>
          My Cart
          {totalQuantity !== 0 && (
            <span>
              (
              {`${
                totalQuantity === 1
                  ? `${totalQuantity} item`
                  : `${totalQuantity} items`
              }`}
              )
            </span>
          )}
        </p>

        <p className="cart-close-icon" onClick={cartCloseHandler}>
          &times;
        </p>
      </div>
      {totalQuantity !== 0 && (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <img
                  src={cartItem.imageURL}
                  alt={`${cartItem.name} image`}
                  height="120px"
                />
                <div className="cart-item-info">
                  <h4>{cartItem.name}</h4>
                  <div className="quantity-price">
                    <div className="quantity">
                      <span
                        className="decrease-qty-btn"
                        onClick={() => reduceQtyHandler(cartItem)}
                      >
                        -
                      </span>
                      <span className="total-item-quantity">
                        {cartItem.quantity}
                      </span>
                      <span
                        className="increase-qty-btn"
                        onClick={() => increaseQtyHandler(cartItem)}
                      >
                        +
                      </span>
                    </div>
                    <div className="cart-qty-times">&times;</div>
                    <p>Rs.{cartItem.price}</p>
                    <div className="total-item-amount">
                      Rs.{cartItem.price * cartItem.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-banner">
              <img src="static\images\lowest-price.png" alt="" />
              <p>You won't find it cheaper anywhere</p>
            </div>
          </div>
        </div>
      )}
      {!totalQuantity && (
        <div className="empty-cart">
          <h4>No items in your cart</h4>
          <p>Your favourite items are just a click away</p>
        </div>
      )}
      <div className="cart-footer">
        {totalQuantity !== 0 && <p>Promo can be applied on payment page</p>}
        <div className="proceed-section">
          {!totalQuantity && (
            <p
              className="start-shopping"
              onClick={() => {
                navigate("/products");
                dispatch(cartToggle());
              }}
            >
              Start Shopping
            </p>
          )}
          {totalQuantity !== 0 && <p>Proceed to Checkout</p>}
          {totalQuantity !== 0 && <p>Rs.{totalAmount} &gt;</p>}
        </div>
      </div>
    </article>
  );
}
export default Cart;
